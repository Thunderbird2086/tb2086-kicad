module.exports = {
  params: {
    designator: 'S',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,     // delete if not needed
    P2: {type: 'net', value: undefined}, // change to undefined as needed
    P1: {type: 'net', value: undefined}, // change to undefined as needed
  },
  body: p => {
    const standard_opening = `(
         footprint "TB2086_KEYSWITCH:SW_choc_v1_v2_HS_1u_reversible"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (descr "Hotswap footprint for Kailh Choc v2 style switches")
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_line (start -2.3 7.475) (end -1.5 8.275) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "8e7e3160-3652-4fa5-bf9c-9889e3c2ee1a"))
        (fp_line (start -1.5 3.625) (end -2.3 4.425) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "d43462d7-f4a7-4298-b58a-edd62c076c0c"))
        (fp_line (start -1.5 3.625) (end -0.5 3.625) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "74e0cfb5-d27b-4162-b81f-77550c087660"))
        (fp_line (start -1.5 8.275) (end -0.5 8.275) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "99296fc7-3e22-4ff9-9fec-0e9b2dd06bc1"))
        (fp_line (start 7.504 1.475) (end 6.504 1.475) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "5feaa266-7d1e-4e5b-933a-54e9b3616faa"))
        (fp_line (start 7.504 1.475) (end 7.504 2.175) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "38de526d-e1e5-4afc-96b5-4c20536b55cf"))
        (fp_arc (start 7.25 5.325) (mid 7.015685 5.890685) (end 6.45 6.125) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "00bb246a-734f-470c-b179-5b03d2b85208"))
    `
    const front_pads = `
        (pad "1" smd roundrect (at 7.112 3.75 ${p.rot}) (size 3.85 2.6) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.1) (uuid "fc3f14f9-aade-4342-a3de-5a97bc82f273") ${p.P1})
        (pad "2" smd roundrect (at -2.045 5.95 ${p.rot}) (size 3.1 2.6) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.1) (uuid "6d8d6dc7-de09-4ea2-bf00-753c88a074ac") ${p.P2})
    `
    const front_fabrication = `
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "a75f7dc4-6e77-4da0-a8d9-88f9ab91d595") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "ef2d9fb4-c3cb-4188-a9a3-944ebf738fc4") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "525ae5d4-aaa5-4151-8ee2-fcbe85873786") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text user "${p.ref}" (at -3.98 -2.65 ${0 + p.rot}) (layer "F.Fab") (uuid "8196d4c0-7d48-4e73-b78f-8c3e02850d64") (effects (font (size 0.5 0.5) (thickness 0.1))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -7 7) (end 7 7) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "64bf1f3d-1a99-4ea0-a71e-a09448fbae6b"))
        (fp_line (start -4.104 4.975) (end -4.104 6.925) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "e4f79a67-cff0-4dd1-855d-4e475bee7c8b"))
        (fp_line (start -4.104 4.975) (end -2.3 4.975) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "7a42af41-17d8-412c-89cd-6f9b2e3192df"))
        (fp_line (start -4.104 6.925) (end -2.3 6.925) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "44568d16-30f8-4031-9e1f-eccae31c22e2"))
        (fp_line (start -2.3 4.975) (end -2.3 4.425) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "d37cf931-4bfe-4d1d-868b-87c7672d4cdc"))
        (fp_line (start -2.3 7.475) (end -2.3 6.925) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "ba522bd4-fccb-4810-bee9-51a7370505e8"))
        (fp_line (start -2.3 7.475) (end -1.5 8.275) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "50eb0198-567c-4781-abb9-278d2e41a1bf"))
        (fp_line (start -1.5 3.625) (end -2.3 4.425) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "b1b46a24-9023-4cc8-8118-34b558d45d90"))
        (fp_line (start -1.5 3.625) (end 0.3 3.625) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "2c0f4002-5fb7-4193-8d96-49d5e733b0a6"))
        (fp_line (start -1.5 8.275) (end 1.65 8.275) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "9427c4a9-5b14-41dc-a6e3-05dddab97397"))
        (fp_line (start 2.45 7.475) (end 1.65 8.275) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "371abab8-8f55-42f4-9319-7b85070e479d"))
        (fp_line (start 2.45 7.475) (end 2.45 7.125) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "e2881dd2-3a4f-42ed-a1b7-4e1e49312b29"))
        (fp_line (start 3.45 6.125) (end 6.45 6.125) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "85a0e719-a20e-4fd4-90d4-35fcb2775f98"))
        (fp_line (start 7.25 4.725) (end 9.104 4.725) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "afa5d8ef-2a6d-45b4-a927-571a9b2cc2fa"))
        (fp_line (start 7.25 5.325) (end 7.25 4.725) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "6a08995e-f244-4ff5-8e17-330bfbedb1ba"))
        (fp_line (start 7.504 1.475) (end 3.4 1.475) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "58cd82f0-8c46-4464-9a60-f4fe73ef874a"))
        (fp_line (start 7.504 1.475) (end 7.504 2.175) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "45040354-4ac0-4643-b598-bf66a415b79a"))
        (fp_line (start 7.504 2.175) (end 7.504 2.775) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "8f2fcf33-8b4f-48d1-94cb-9c86a8856492"))
        (fp_line (start 9.104 2.775) (end 7.504 2.775) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "d66a9c41-b85d-4f9c-a034-bfc448e342e0"))
        (fp_line (start 9.104 4.725) (end 9.104 2.775) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "1657aec9-dbed-4c2b-a852-1e8ae5f3ad79"))
        (fp_arc (start 2.45 7.125) (mid 2.742893 6.417893) (end 3.45 6.125) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "72edf320-e8fd-4f81-a97c-3e0ab30cbcd2"))
        (fp_arc (start 2.455444 2.13293) (mid 1.577272 3.167235) (end 0.299999 3.624999) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "d5d64360-90ee-4c4f-bcb4-50731f501dde"))
        (fp_arc (start 2.460307 2.13298) (mid 2.826423 1.655848) (end 3.4 1.475) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "e3b8db15-94ea-4f62-b3b0-a4418d00b3b7"))
        (fp_arc (start 7.25 5.325) (mid 7.015685 5.890685) (end 6.45 6.125) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "d9d86eb5-666d-4a94-8e78-deeaffb85716"))
    `
    const front_paste = `
    `
    const pads = `
        (pad "1" thru_hole circle (at -5 3.75 ${p.rot}) (size 3.3 3.3) (drill 3) (layers "*.Cu" "B.Mask") (remove_unused_layers no) (uuid "bcc048db-22a1-494f-a68b-f43a39ea4c6d") ${p.P1})
        (pad "1" thru_hole circle (at 0 3.3 ${p.rot}) (size 0.5 0.5) (drill 0.3) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "c8ed6409-8f4a-4566-9572-95265fb3b004") ${p.P1})
        (pad "1" thru_hole circle (at 5 3.75 ${p.rot}) (size 3.3 3.3) (drill 3) (layers "*.Cu" "F.Mask") (remove_unused_layers no) (uuid "d7020fac-aac9-4151-bfbf-6f5c56d29136") ${p.P1})
        (pad "2" thru_hole circle (at 0 5.95 ${p.rot}) (size 3.3 3.3) (drill 3) (layers "*.Cu" "B.Mask") (remove_unused_layers no) (uuid "90fc724c-076a-4d35-8bea-a19c4f445197") ${p.P2})
        (pad "" np_thru_hole circle (at -5.5 0 ${180 + p.rot}) (size 1.7 1.7) (drill 1.7) (layers "F&B.Cu" "*.Mask") (uuid "bbe4ed15-b971-474a-ae7b-ae7e3fe5725b"))
        (pad "" np_thru_hole circle (at -5 -5.15 ${180 + p.rot}) (size 1.6 1.6) (drill 1.6) (layers "F&B.Cu" "*.Mask") (uuid "41a96f6b-a230-4fc5-9813-d7454bf4a9c0"))
        (pad "" np_thru_hole circle (at 0 0 ${180 + p.rot}) (size 5 5) (drill 5) (layers "F&B.Cu" "*.Mask") (uuid "35b0e91f-8cba-4505-83b2-22e9b7ecc26e"))
        (pad "" np_thru_hole circle (at 5 -5.15 ${180 + p.rot}) (size 1.6 1.6) (drill 1.6) (layers "F&B.Cu" "*.Mask") (uuid "ebfa51b8-6de8-472b-933d-adc30a2ffb2e"))
        (pad "" np_thru_hole circle (at 5.5 0 ${180 + p.rot}) (size 1.7 1.7) (drill 1.7) (layers "F&B.Cu" "*.Mask") (uuid "4ca1a3e4-b5eb-4747-a777-119bd6bdfeee"))
    `
    const back_silkscreen = `
        (fp_line (start -7.504 1.475) (end -7.504 2.175) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "bf209cda-61a6-43fc-a3a0-311ca8c22b1e"))
        (fp_line (start -7.504 1.475) (end -6.504 1.475) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "b6349c57-d885-414f-8ca2-44ccdd870936"))
        (fp_line (start 1.5 3.625) (end 0.5 3.625) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "94178973-a0db-4667-88de-fc63913991a5"))
        (fp_line (start 1.5 3.625) (end 2.3 4.425) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "1896021d-1b35-4758-addb-c42bc090f486"))
        (fp_line (start 1.5 8.275) (end 0.5 8.275) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "60030bb2-4966-4327-9943-de0db37abdaf"))
        (fp_line (start 2.3 7.475) (end 1.5 8.275) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "7e45cf06-951b-490d-96e9-44e7fae65768"))
        (fp_arc (start -6.45 6.125) (mid -7.015685 5.890685) (end -7.25 5.325) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "fb8eb3c4-60e0-4202-a4f1-3f957950414b"))
    `
    const back_pads = `
        (pad "1" smd roundrect (at -7.112 3.75 ${p.rot}) (size 3.85 2.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.1) (uuid "6b6802c4-230d-4efc-ba0f-f4c427e0adf9") ${p.P1})
        (pad "2" smd roundrect (at 2.045 5.95 ${p.rot}) (size 3.1 2.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.1) (uuid "09a14e6b-cca2-4927-bf0e-88b6211c4722") ${p.P2})
    `
    const back_fabrication = `
    `
    const back_mask = `
    `
    const back_courtyard = `
        (fp_line (start -9.104 2.775) (end -7.504 2.775) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "b1bb113e-765e-497e-bcb7-94f0d4137098"))
        (fp_line (start -9.104 4.725) (end -9.104 2.775) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "06629624-668f-4600-a874-224e37127ab5"))
        (fp_line (start -7.504 1.475) (end -7.504 2.175) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "fb6e4741-c3d8-419b-b929-5c1488ac64df"))
        (fp_line (start -7.504 1.475) (end -3.4 1.475) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "8f127291-6977-4bb3-8e56-f86b9ebd2625"))
        (fp_line (start -7.504 2.175) (end -7.504 2.775) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "aa452631-5be9-49cd-97c6-fadaa154468e"))
        (fp_line (start -7.25 4.725) (end -9.104 4.725) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "1be765c9-9241-4126-89be-67060e409834"))
        (fp_line (start -7.25 5.325) (end -7.25 4.725) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "354288bb-341a-4ada-ae8b-5eec7bc0b97d"))
        (fp_line (start -7 -7) (end 7 -7) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "22079985-0702-40a3-91c0-f568fe9cd5df"))
        (fp_line (start -7 7) (end -7 -7) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "451b9426-bb92-4f62-aa37-123fcb139a25"))
        (fp_line (start -3.45 6.125) (end -6.45 6.125) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "5db89bb1-f510-4731-bcf5-7835a93a6e1e"))
        (fp_line (start -2.45 7.475) (end -2.45 7.125) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "17f037a7-e5dd-4792-8cc6-9e123406b9bf"))
        (fp_line (start -2.45 7.475) (end -1.65 8.275) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "b641ed58-63c2-40e5-95ac-92eb1b6c5b2c"))
        (fp_line (start 1.5 3.625) (end -0.3 3.625) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "8e181bdb-80ac-4ef6-a9da-ff16a9573242"))
        (fp_line (start 1.5 3.625) (end 2.3 4.425) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "6e3fe717-4e09-4bd5-93e9-26239cbebe9e"))
        (fp_line (start 1.5 8.275) (end -1.65 8.275) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "2b38c4d8-e69a-4ff8-afe5-a68e20eed5ce"))
        (fp_line (start 2.3 4.975) (end 2.3 4.425) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "4a0f906a-54b5-4787-be14-d6b09e2ac395"))
        (fp_line (start 2.3 7.475) (end 1.5 8.275) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "8a1b9d93-6413-4c02-8fe0-b17a4f5bc393"))
        (fp_line (start 2.3 7.475) (end 2.3 6.925) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "459e9349-4b6e-4ccc-8c9a-81a3e4a3aa7f"))
        (fp_line (start 4.104 4.975) (end 2.3 4.975) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "24dcf56c-adf8-4d30-8346-5e4b08964bef"))
        (fp_line (start 4.104 4.975) (end 4.104 6.925) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "5fdfb6ce-49bd-45bd-828f-07ea01cc7c2c"))
        (fp_line (start 4.104 6.925) (end 2.3 6.925) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "5faf6e3a-c7be-4158-846e-28eed9dd5c1a"))
        (fp_line (start 7 -7) (end 7 7) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "43452d79-fdc4-4f56-a7dc-71af3e332eeb"))
        (fp_line (start 7 7) (end -7 7) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "bf5f7b0c-aad3-4511-b33b-3d621e265ae0"))
        (fp_arc (start -6.45 6.125) (mid -7.015685 5.890685) (end -7.25 5.325) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "c1555f66-1435-4b75-a73c-8fb2923a86b5"))
        (fp_arc (start -3.45 6.125) (mid -2.742893 6.417893) (end -2.45 7.125) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "0923f2b0-71db-4e83-b60a-f6d0e2f83818"))
        (fp_arc (start -3.4 1.475) (mid -2.826423 1.655848) (end -2.460307 2.13298) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "9197b611-7364-41eb-88f2-8ccd742e7dcd"))
        (fp_arc (start -0.299999 3.624999) (mid -1.577272 3.167235) (end -2.455444 2.13293) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "25c6a9da-55ab-4cd5-a65a-e691268295ae"))
    `
    const back_paste = `
    `
    const edge_cuts = `
    `
    const user_drawing = `
        (property "Reference" "${p.ref}" (at 0 -2.75 ${180 + p.rot}) (layer "Dwgs.User") (hide yes) (uuid "47ecae4d-8aae-4075-8b7e-5401b31551a0") (effects (font (size 1 1) (thickness 0.15))))
        (fp_line (start -9 -8.5) (end 9 -8.5) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (uuid "e8a30d80-0f70-497b-aff8-e43ea47f64ba"))
        (fp_line (start -9 8.5) (end -9 -8.5) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (uuid "320269be-1551-4db5-93ff-bbfd346ef4c1"))
        (fp_line (start 9 -8.5) (end 9 8.5) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (uuid "adcf2f47-eeb9-4e71-a5ad-da5fd1d7542e"))
        (fp_line (start 9 8.5) (end -9 8.5) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (uuid "d91918a8-73ef-4c44-aaf2-2415ac860dd6"))
        (fp_text user "18x17 spacing" (at 0 -7.6 ${180 + p.rot}) (layer "Dwgs.User") (uuid "e8785969-fa4c-4078-ab14-0de5941889c3") (effects (font (size 1 1) (thickness 0.15))))
    `
    const user_comments = `
        (fp_line (start -9.525 -9.525) (end -9.525 9.525) (stroke (width 0.12) (type solid)) (layer "Cmts.User") (uuid "db7cc22d-4aec-4ec3-a289-f23ed33141a0"))
        (fp_line (start -9.525 9.525) (end 9.525 9.525) (stroke (width 0.12) (type solid)) (layer "Cmts.User") (uuid "94056827-1ffa-4351-90dc-5dddf67ed2d6"))
        (fp_line (start 9.525 -9.525) (end -9.525 -9.525) (stroke (width 0.12) (type solid)) (layer "Cmts.User") (uuid "763a5235-9219-49c6-a798-754d4fda0bb8"))
        (fp_line (start 9.525 9.525) (end 9.525 -9.525) (stroke (width 0.12) (type solid)) (layer "Cmts.User") (uuid "614c1cbd-60aa-4d6b-87ed-2f9b7b382476"))
        (fp_rect (start -2.75 -6.405) (end 2.75 -3.455) (stroke (width 0.1) (type default)) (fill none) (layer "Cmts.User") (uuid "1b48d640-094c-4c3a-b486-05044ae3a4f6"))
        (fp_text user "LED" (at 0 -4.7625 ${0 + p.rot}) (unlocked yes) (layer "Cmts.User") (uuid "6c4ff8fd-df4c-4395-a50f-159bf6c53ab5") (effects (font (size 1 1) (thickness 0.15))))
        (fp_text user "19.05 spacing" (at 0 -8.7 ${180 + p.rot}) (layer "Cmts.User") (uuid "c4471c3f-83ae-472f-abf6-fb9a2d7f165e") (effects (font (size 1 1) (thickness 0.15))))
    `
    const user_eco1 = `
    `
    const user_eco2 = `
        (fp_line (start -6.95 6.45) (end -6.95 -6.45) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "43f89897-316d-4071-9a1a-ecf185a7209b"))
        (fp_line (start -6.45 -6.95) (end 6.45 -6.95) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "6461143f-115c-44ea-a6ff-6bcd274b0905"))
        (fp_line (start 6.45 6.95) (end -6.45 6.95) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "97527f4c-22ae-4eba-98d7-0d6a79e53429"))
        (fp_line (start 6.95 -6.45) (end 6.95 6.45) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "34e3983b-2aca-4d7e-8576-657f98c1bcf9"))
        (fp_arc (start -6.95 -6.45) (mid -6.803553 -6.803553) (end -6.45 -6.95) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "796a4bc0-9292-48a2-9045-32e450195cbd"))
        (fp_arc (start -6.45 6.95) (mid -6.803553 6.803553) (end -6.95 6.45) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "59f903f8-82e3-446d-9f55-aaeec01ff748"))
        (fp_arc (start 6.45 -6.95) (mid 6.803553 -6.803553) (end 6.95 -6.45) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "48ea72d8-7316-4ba8-9009-1b2655e0d5cc"))
        (fp_arc (start 6.95 6.45) (mid 6.803553 6.803553) (end 6.45 6.95) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "9c3b078c-37aa-4cfe-b6e7-ca84185f32a9"))
    `
    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/Hot Swap/choc.step" (offset (xyz -5 -3.75 -3.5)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 180)))
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/Key Switch/Choc-V1-red.step" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/Keycaps/Kailh Choc FunkMonk 1u.step" (offset (xyz 0 0 2.5)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
    `
    const standard_closing = `
            )

    `
    let final = standard_opening;
    final += front_silkscreen;
    final += front_pads;
    final += front_fabrication;
    final += front_mask;
    final += front_courtyard;
    final += front_paste;
    final += pads;
    final += back_silkscreen;
    final += back_pads;
    final += back_fabrication;
    final += back_mask;
    final += back_courtyard;
    final += back_paste;
    final += edge_cuts;
    final += user_drawing;
    final += user_comments;
    final += user_eco1;
    final += user_eco2;
    final += model;
    final += standard_closing;

    return final
  }
}
