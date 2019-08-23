#!/bin/bash

# Treat unset variables as errors
set -u

# Preserve newlines
IFS=

# Update git config in case we need to commit as part of this build
git config user.email "$CI_GIT_USER_EMAIL"
git config user.name "$CI_GIT_USER_NAME"

# Boolean flag to indicate if a project was (re)published
projectWasPublished=false

# Iterate over Framer projects
for framerProject in *.framerfx;
do
  # Switch to project directory
  cd $framerProject

  # Cache previous yarn.lock
  previousYarnLock=$(cat ./yarn.lock)

  # Update dependencies
  yarn > /dev/null 2>&1

  # Cache new yarn.lock
  newYarnLock=$(cat ./yarn.lock)

  # Check if any namespaced dependencies changes
  namespacedDependenciesChanged=$(node ../bin/yarn-lock-diff.js $PACKAGE_NAMESPACES $previousYarnLock $newYarnLock)

  if [ "$namespacedDependenciesChanged" == "true" ]; then
    echo "$framerProject had $PACKAGE_NAMESPACES dependency updates, publishing new version of project"

    # Update boolean flag
    projectWasPublished=true

    # Build project
    npx framer-cli build 
    
    # Publish project to team store
    # @TODO uncomment
    # npx framer-cli publish --yes
  else
    echo "$framerProject had no $PACKAGE_NAMESPACES dependency updates"
  fi 

  # Switch back to root directory
  cd ..
done

# If a project was updated we need to update the repository to reflect the new yarn.lock files
if [ "$projectWasPublished" = true ]; then
  git add .
  git commit -m 'Republished Framer project [skip ci]'
  git push origin HEAD
fi
