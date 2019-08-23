// WARNING: this file is auto generated, any changes will be lost
import { createDesignComponent, CanvasStore } from "framer"
const canvas = CanvasStore.shared(); // CANVAS_DATA;

export const colors = Object.freeze({
    /** #DEEBFF */
    "B50": "var(--token-dea8e201-5259-45c5-8e21-c4f5c181fbdf, rgb(222, 235, 255))",
    /** #B3D4FF */
    "B75": "var(--token-e52c9acc-d2ad-4310-a48b-d274e854b688, rgb(179, 212, 255))",
    /** #4C9AFF */
    "B100": "var(--token-f6647414-18bb-4dae-9301-4ed1ba0bbb2a, rgb(76, 154, 255))",
    /** #2684FF */
    "B200": "var(--token-9adbaba3-f4ef-4bde-9562-5a6baab5f7fa, rgb(38, 132, 255))",
    /** #0065FF */
    "B300": "var(--token-6ca80463-9c4d-4b99-91fe-0a57df0d1e89, rgb(0, 101, 255))",
    /** #0052CC */
    "B400": "var(--token-cde76cad-87f7-4eec-9e11-3036a6e670fe, rgb(0, 82, 204))",
    /** #0747A6 */
    "B500": "var(--token-026d1af2-974e-4c45-bf5e-96bfe2f67b79, rgb(7, 71, 166))",
    /** #FFEBE6 */
    "R50": "var(--token-209a3ed5-2005-4b57-ae63-b5b7febebbbe, rgb(255, 235, 230))",
    /** #FFBDAD */
    "R75": "var(--token-753f7976-84da-4cda-a0a4-3c7601e6ef24, rgb(255, 189, 173))",
    /** #FF8F73 */
    "R100": "var(--token-7c677e2d-ed2b-42a6-8044-da964a9d0b99, rgb(255, 143, 115))",
    /** #FF7452 */
    "R200": "var(--token-26e7b581-0978-4ab1-b56c-5b93da5b1a79, rgb(255, 116, 82))",
    /** #FF5630 */
    "R300": "var(--token-c444abe4-8fe2-49b3-b2e0-14fd707a3202, rgb(255, 86, 48))",
    /** #DE350B */
    "R400": "var(--token-ef19653b-2a36-4937-90d5-10a740c74fff, rgb(222, 53, 11))",
    /** #BF2600 */
    "R500": "var(--token-a0c96e25-e9b0-4068-b65f-2d4d78ab41ed, rgb(191, 38, 0))",
    /** #FFFAE6 */
    "Y50": "var(--token-d89e51ef-5a41-4bbd-aff1-18ad1db8904d, rgb(255, 250, 230))",
    /** #FFF0B3 */
    "Y75": "var(--token-661b8aba-2f71-46b2-812b-d56e09367c48, rgb(255, 240, 179))",
    /** #FFE380 */
    "Y100": "var(--token-1f1cd129-123c-4ad1-a00f-2b7104b67c1e, rgb(255, 227, 128))",
    /** #FFC400 */
    "Y200": "var(--token-693df4dd-4a76-47ee-8b83-2481ed8ede8f, rgb(255, 196, 0))",
    /** #FFAB00 */
    "Y300": "var(--token-ead68780-5aeb-483a-ae04-36698447e6ac, rgb(255, 171, 0))",
    /** #FF991F */
    "Y400": "var(--token-da0018b8-1194-4210-8b69-cd2a0a452058, rgb(255, 153, 31))",
    /** #FF8B00 */
    "Y500": "var(--token-5195924a-ee60-4938-b69a-4f60a53452a5, rgb(255, 139, 0))",
    /** #E2FFEE */
    "G50": "var(--token-16095d52-85cf-47f8-8a2f-b45abe6e779f, rgb(226, 255, 238))",
    /** #ABF5D1 */
    "G75": "var(--token-bca8e9d7-e027-4f21-914d-dcaf2b63c665, rgb(171, 245, 209))",
    /** #79F2C0 */
    "G100": "var(--token-4a7fc32e-32ef-48f9-b921-229fa8ff6aa1, rgb(121, 242, 192))",
    /** #57D9A3 */
    "G200": "var(--token-d0c38861-e733-4ac2-b9b4-0c57e4e061aa, rgb(87, 217, 163))",
    /** #36B37E */
    "G300": "var(--token-ae8e4815-f5b4-49f2-b8b9-82cbc4e92330, rgb(54, 179, 126))",
    /** #00875A */
    "G400": "var(--token-335df15d-2251-4c97-a89f-d554de88e378, rgb(0, 135, 90))",
    /** #006644 */
    "G500": "var(--token-8107b618-874a-4a75-9c61-6d563f2a43bf, rgb(0, 102, 68))",
    /** #E6FCFF */
    "T50": "var(--token-8579c595-7ad6-449d-aa6a-d4079ca4669e, rgb(230, 252, 255))",
    /** #B3F5FF */
    "T75": "var(--token-cbfc88c4-8b51-4c00-9fe6-c6650cffc14f, rgb(179, 245, 255))",
    /** #79E2F2 */
    "T100": "var(--token-30c21366-dde5-4bdd-bdae-a63ab00c59b0, rgb(121, 226, 242))",
    /** #00C7E6 */
    "T200": "var(--token-b8582807-5f32-46ec-9774-886d87a02b58, rgb(0, 199, 230))",
    /** #00B8D9 */
    "T300": "var(--token-a939a26c-ec08-4e91-b7a3-014ea476ce87, rgb(0, 184, 217))",
    /** #00A3BF */
    "T400": "var(--token-46ecf07f-74bd-477d-9d09-1100c9f29042, rgb(0, 163, 191))",
    /** #008DA6 */
    "T500": "var(--token-46bacd81-847b-4941-8bb3-a1e957c8ce2c, rgb(0, 141, 166))",
    /** #EAE6FF */
    "P50": "var(--token-6d16f2b2-48f3-4724-aaad-a2652af86435, rgb(234, 230, 255))",
    /** #C0B6F2 */
    "P75": "var(--token-1a8e8ff5-c536-4ae4-892c-267c170aa5fb, rgb(192, 182, 242))",
    /** #998DD9 */
    "P100": "var(--token-871b2ba1-b461-45c9-9084-67ed19fb8b36, rgb(153, 141, 217))",
    /** #8777D9 */
    "P200": "var(--token-a046171c-d867-462c-b0aa-88672525b6a9, rgb(135, 119, 217))",
    /** #6554C0 */
    "P300": "var(--token-b2a31744-574a-487f-a30a-dcdf1adf5928, rgb(101, 84, 192))",
    /** #5243AA */
    "P400": "var(--token-4d38d198-15ba-4ff4-bc97-ffba66022947, rgb(82, 67, 170))",
    /** #403294 */
    "P500": "var(--token-2500eb79-6fc0-4c00-ab6d-a2677a1397fd, rgb(64, 50, 148))",
    /** #FFFFFF */
    "N0": "var(--token-2c7a7a94-2b4a-4c18-9d57-21663d53dd05, rgb(255, 255, 255))",
    /** #FAFBFC */
    "N10": "var(--token-e9af0643-b0a5-417b-a1f4-1a59c2706dae, rgb(250, 251, 252))",
    /** #F4F5F7 */
    "N20": "var(--token-12c3b27b-6688-4817-a2db-8257f145a049, rgb(244, 245, 247))",
    /** #EBECF0 */
    "N30": "var(--token-4a43c946-387f-48dc-9911-a6021b92f063, rgb(235, 236, 240))",
    /** #DFE1E6 */
    "N40": "var(--token-e9994ee8-6163-45f1-a5ff-a76414992ac5, rgb(223, 225, 230))",
    /** #C1C7D0 */
    "N50": "var(--token-bc9d98a7-80e3-4427-8104-cad8ed6d0dff, rgb(193, 199, 208))",
    /** #B3BAC5 */
    "N60": "var(--token-aea76336-7c7a-456f-96bf-c77a49b84023, rgb(179, 186, 197))",
    /** #A5ADBA */
    "N70": "var(--token-ba463dad-ffa5-47a0-a823-d696d37cae52, rgb(165, 173, 186))",
    /** #97A0AF */
    "N80": "var(--token-60bd007b-b447-4f24-8061-a604badf561c, rgb(151, 160, 175))",
    /** #8993A4 */
    "N90": "var(--token-45976467-6ab3-4e2f-bfc4-288c8d2f9289, rgb(137, 147, 164))",
    /** #7A869A */
    "N100": "var(--token-3002b18d-3a07-411a-864d-489b5e0e2fb6, rgb(122, 134, 154))",
    /** #6B778C */
    "N200": "var(--token-089fab4b-12fb-44d3-b512-85d2391d4d98, rgb(107, 119, 140))",
    /** #5E6C84 */
    "N300": "var(--token-427d9aca-78f7-4cbb-abcc-3fc0fc3f8d8f, rgb(94, 108, 132))",
    /** #505F79 */
    "N400": "var(--token-f5ee2b1c-6e13-4d37-ab12-0bb71b74678a, rgb(80, 95, 121))",
    /** #42526E */
    "N500": "var(--token-1a87ea99-7c34-41a7-a343-a1dd3e015a50, rgb(66, 82, 110))",
    /** #344563 */
    "N600": "var(--token-c96d5d7a-8972-434b-a029-f18d1be54604, rgb(52, 69, 99))",
    /** #253858 */
    "N700": "var(--token-e4f2ad80-b8a4-4281-a83b-0bf3967a593b, rgb(37, 56, 88))",
    /** #172B4D */
    "N800": "var(--token-4f3f87c3-d1eb-4115-aa9a-6b17a0f8c253, rgb(23, 43, 77))",
    /** #091E42 */
    "N900": "var(--token-7aaff30b-0b58-47ba-a7cd-e72d23deb71b, rgb(9, 30, 66))",
})
