module.exports = {
  params: {
    designator: 'S',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    P2: {type: 'net', value: 'P2'}, // undefined, // change to undefined as needed
    P1: {type: 'net', value: 'P1'}, // undefined, // change to undefined as needed
  },
  body: p => {
    const standard_opening = `(
         footprint "SW_choc_v1_v2_HS_1.5u_reversible"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (descr "Hotswap footprint for Kailh Choc v2 style switches")
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_pads = `
        (pad "1" smd roundrect (at 7.23 3.75 ${p.rot}) (size 3.85 2.6) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.1) (uuid "8cd9cfe7-9df4-46cd-8535-246a095fb118") ${p.P1})
        (pad "2" smd roundrect (at -2.045 5.95 ${p.rot}) (size 3.1 2.6) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.1) (uuid "1af266cc-4bf9-4948-8cd3-44ccd340bcf3") ${p.P2})
    `
    const pads = `
        (pad "" np_thru_hole circle (at 5.5 0 ${180 + p.rot}) (size 1.7 1.7) (drill 1.7) (layers "*.Cu" "*.Mask") (uuid "5f2b8416-f35d-478a-be1f-251906b6bc0c"))
        (pad "1" thru_hole circle (at -5 3.75 ${p.rot}) (size 3.3 3.3) (drill 3) (layers "*.Cu" "B.Mask") (remove_unused_layers no) (uuid "3b4d5472-f281-4dbb-8c8f-f5dae195f805") ${p.P1})
        (pad "1" thru_hole circle (at 0 3.3 ${p.rot}) (size 0.5 0.5) (drill 0.3) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "bc0a88fa-745b-441a-93a7-4b1108726d0a") ${p.P1})
        (pad "1" thru_hole circle (at 5 3.75 ${p.rot}) (size 3.3 3.3) (drill 3) (layers "*.Cu" "F.Mask") (remove_unused_layers no) (uuid "53fc6c90-2b4b-497b-9879-cb6782dbb43a") ${p.P1})
        (pad "2" thru_hole circle (at 0 5.95 ${p.rot}) (size 3.3 3.3) (drill 3) (layers "*.Cu" "F.Mask") (remove_unused_layers no) (uuid "cec53733-24a8-461c-ba81-01dfb3f5c663") ${p.P2})
    `
    const back_pads = `
        (pad "" np_thru_hole circle (at -5.5 0 ${180 + p.rot}) (size 1.7 1.7) (drill 1.7) (layers "F&B.Cu" "*.Mask") (uuid "4ede7b1e-3f14-43de-b5da-80bcc2042227"))
        (pad "" np_thru_hole circle (at -5 -5.15 ${180 + p.rot}) (size 1.6 1.6) (drill 1.6) (layers "F&B.Cu" "*.Mask") (uuid "41a96f6b-a230-4fc5-9813-d7454bf4a9c0"))
        (pad "" np_thru_hole circle (at 0 0 ${180 + p.rot}) (size 5 5) (drill 5) (layers "F&B.Cu" "*.Mask") (uuid "35b0e91f-8cba-4505-83b2-22e9b7ecc26e"))
        (pad "" np_thru_hole circle (at 5 -5.15 ${180 + p.rot}) (size 1.6 1.6) (drill 1.6) (layers "F&B.Cu" "*.Mask") (uuid "35055506-c521-41e7-9bb7-d1cf1a65677e"))
        (pad "1" smd roundrect (at -7.23 3.75 ${p.rot}) (size 3.85 2.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.1) (uuid "c58383d7-06c6-4663-8254-f1131b3522e0") ${p.P1})
        (pad "2" smd roundrect (at 2.045 5.95 ${p.rot}) (size 3.1 2.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.1) (uuid "ee4cf27f-adf9-4a97-acb7-17eae37eb66a") ${p.P2})
    `
    const front_silkscreen = `
        (property "Value" "SW_choc_v2_HS_1.5u" (at 0 -6 ${180 + p.rot}) (layer "F.SilkS") (hide yes) (uuid "23931bb1-cfe5-48ac-af9c-5724097aec7d") (effects (font (size 1 1) (thickness 0.15))))
        (fp_line (start -2.3 7.475) (end -1.5 8.275) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "871dab25-0017-4917-88aa-69471ecc9421"))
        (fp_line (start -1.5 3.625) (end -2.3 4.425) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "8d9c3dec-1870-4c7b-9cd7-13128d4c0513"))
        (fp_line (start -1.5 3.625) (end -0.5 3.625) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "927aa3cc-f324-4768-917a-4712096f22f1"))
        (fp_line (start -1.5 8.275) (end -0.5 8.275) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "314be567-7d2d-47f2-bff2-e1bad37f036a"))
        (fp_line (start 7.504 1.475) (end 6.504 1.475) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "8e4dbd1a-3304-41be-b6e8-907f4a537569"))
        (fp_line (start 7.504 1.475) (end 7.504 2.175) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "b97a7013-a3db-48ec-b976-444073f205bb"))
        (fp_arc (start 7.25 5.325) (mid 7.015685 5.890685) (end 6.45 6.125) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "abdaac34-f9b4-4a9d-93a4-8a28b1ed28a6"))
    `
    const back_silkscreen = `
        (fp_line (start -7.504 1.475) (end -7.504 2.175) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "caf0e7ac-41df-4d14-92e1-b60361c622fb"))
        (fp_line (start -7.504 1.475) (end -6.504 1.475) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "2eaac0c0-08ae-40ea-a334-1e8f954be5ae"))
        (fp_line (start 1.5 3.625) (end 0.5 3.625) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "3c4a3f5b-ceab-405e-9750-95d39ef7d99e"))
        (fp_line (start 1.5 3.625) (end 2.3 4.425) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "08de5835-08eb-4054-b279-01f160f6d886"))
        (fp_line (start 1.5 8.275) (end 0.5 8.275) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "cec8d691-465e-43fe-808b-b133fa4e8848"))
        (fp_line (start 2.3 7.475) (end 1.5 8.275) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "4be47537-b630-476b-a920-a12a0d41ab05"))
        (fp_arc (start -6.45 6.125) (mid -7.015685 5.890685) (end -7.25 5.325) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "525e1da3-2bbd-4a5d-8b9b-16ce47492c46"))
    `
    const front_fabrication = `
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "b20d0534-559c-4691-928b-1a5e36974766") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "572389e7-ff5d-4363-8948-1fa3401e74e5") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "387777a1-c4f1-4ad6-9e57-37b79b5fdbf3") (effects (font (size 1.27 1.27) (thickness 0.15))))
    `
    const back_fabrication = `
    `
    const front_mask = `
    `
    const back_mask = `
    `
    const front_courtyard = `
        (fp_line (start -4.104 4.975) (end -4.104 6.925) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "94605d70-964d-4370-acca-2217a07aea46"))
        (fp_line (start -4.104 4.975) (end -2.3 4.975) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "476d6381-c4b8-4a53-974d-38c4ef4fe260"))
        (fp_line (start -4.104 6.925) (end -2.3 6.925) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "81ad1c8b-f4ee-4cf7-8313-8c8a2a0371d0"))
        (fp_line (start -2.3 4.975) (end -2.3 4.425) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "175ecb5c-803c-4801-b845-f6c39b8bcf38"))
        (fp_line (start -2.3 7.475) (end -2.3 6.925) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "30d69e00-e4fd-4ec1-b434-e9a761f567fd"))
        (fp_line (start -2.3 7.475) (end -1.5 8.275) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "acb2f1e2-ffa8-45b2-a9c9-8a10a19395f2"))
        (fp_line (start -1.5 3.625) (end -2.3 4.425) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "a66c9cb8-729d-452a-a870-7c31d3c6ec4e"))
        (fp_line (start -1.5 3.625) (end 0.3 3.625) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "1bcc7b2a-7634-4f01-a8eb-b30c88df8496"))
        (fp_line (start -1.5 8.275) (end 1.65 8.275) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "a4109bfa-e18a-41ea-bfdd-65b15910dc39"))
        (fp_line (start 2.45 7.475) (end 1.65 8.275) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "004a3b3f-b072-4b11-a553-4d9ac13fce44"))
        (fp_line (start 2.45 7.475) (end 2.45 7.125) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "fafb20dc-6cfe-4b3a-9e72-d979644ec073"))
        (fp_line (start 3.45 6.125) (end 6.45 6.125) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "1a52daee-d0fa-4a38-aa21-b6dc78cc0234"))
        (fp_line (start 7.25 4.725) (end 9.104 4.725) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "fc4c6fe7-349d-4b40-823b-90a891d4526c"))
        (fp_line (start 7.25 5.325) (end 7.25 4.725) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "a98e7cf1-b938-4fdd-b2be-e0146f2815f1"))
        (fp_line (start 7.504 1.475) (end 3.4 1.475) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "d052f314-12bb-45bf-adea-52f350104efd"))
        (fp_line (start 7.504 1.475) (end 7.504 2.175) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "7ac4f88e-af64-40b9-81cd-46fdbfa02f6a"))
        (fp_line (start 7.504 2.175) (end 7.504 2.775) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "77d03e86-340e-4fe3-9694-bf07e9870d7e"))
        (fp_line (start 9.104 2.775) (end 7.504 2.775) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "07fc282e-7130-49bb-bd2e-436742e7e449"))
        (fp_line (start 9.104 4.725) (end 9.104 2.775) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "69c3583b-c617-4545-8945-65bec36fe2be"))
        (fp_arc (start 2.45 7.125) (mid 2.742893 6.417893) (end 3.45 6.125) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "f20f06a7-a6ca-47b0-807b-32fe63f955ac"))
        (fp_arc (start 2.455444 2.13293) (mid 1.577272 3.167235) (end 0.299999 3.624999) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "b6065a9e-e2ac-457f-ad08-c230dd8ef725"))
        (fp_arc (start 2.460307 2.13298) (mid 2.826423 1.655848) (end 3.4 1.475) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "9441c79e-963e-4fd9-ac0a-6a32b394228f"))
        (fp_arc (start 7.25 5.325) (mid 7.015685 5.890685) (end 6.45 6.125) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "338247ac-3634-4704-a985-e27fa98c0be0"))
    `
    const back_courtyard = `
        (fp_line (start -9.104 2.775) (end -7.504 2.775) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "7b9c2c6f-c7e7-40ce-b3be-583dae44f353"))
        (fp_line (start -9.104 4.725) (end -9.104 2.775) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "ef65373a-0995-4cc4-b55c-818a8b5606f0"))
        (fp_line (start -7.504 1.475) (end -7.504 2.175) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "977dbf98-e4a7-4f64-af43-547066416e83"))
        (fp_line (start -7.504 1.475) (end -3.4 1.475) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "7f764ac3-1294-438e-857a-34287de925c4"))
        (fp_line (start -7.504 2.175) (end -7.504 2.775) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "6919dde0-e4bd-4c7c-81fe-1a850e583eba"))
        (fp_line (start -7.25 4.725) (end -9.104 4.725) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "4a054b6a-07cb-4fa1-a9e9-11ef531bd900"))
        (fp_line (start -7.25 5.325) (end -7.25 4.725) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "42bf5eea-bc95-4bf2-8d8f-d0675bd279d9"))
        (fp_line (start -7 -7) (end 7 -7) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "22079985-0702-40a3-91c0-f568fe9cd5df"))
        (fp_line (start -7 7) (end -7 -7) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "451b9426-bb92-4f62-aa37-123fcb139a25"))
        (fp_line (start -3.45 6.125) (end -6.45 6.125) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "56093b19-83f9-49d4-9cbf-897068a0b3b8"))
        (fp_line (start -2.45 7.475) (end -2.45 7.125) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "bf5ff89f-de1d-4c6a-89bf-fb0fd97bb058"))
        (fp_line (start -2.45 7.475) (end -1.65 8.275) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "7bbc5a61-3785-4755-ab89-f59f748a2140"))
        (fp_line (start 1.5 3.625) (end -0.3 3.625) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "98ccf118-0190-4352-bc2c-ab230b75897e"))
        (fp_line (start 1.5 3.625) (end 2.3 4.425) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "13a15297-b020-413b-9459-b4d419f89934"))
        (fp_line (start 1.5 8.275) (end -1.65 8.275) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "5ab116a7-07f7-48ad-9c7e-7588a89b49ed"))
        (fp_line (start 2.3 4.975) (end 2.3 4.425) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "80e74aef-08fd-4741-87b7-147c375bcb99"))
        (fp_line (start 2.3 7.475) (end 1.5 8.275) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "32b40462-3ef7-4327-a2e6-dd1d9d9a5aa1"))
        (fp_line (start 2.3 7.475) (end 2.3 6.925) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "2c02b127-3096-45b0-8b60-44fea6315f50"))
        (fp_line (start 4.104 4.975) (end 2.3 4.975) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "436916c9-5207-449d-b135-76c36ea9de3c"))
        (fp_line (start 4.104 4.975) (end 4.104 6.925) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "3fc8a322-313f-40df-96dd-bad6210918c7"))
        (fp_line (start 4.104 6.925) (end 2.3 6.925) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "b9ae76fd-5d70-4444-ad3a-754ac17e8ef0"))
        (fp_line (start 7 -7) (end 7 7) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "43452d79-fdc4-4f56-a7dc-71af3e332eeb"))
        (fp_line (start 7 7) (end -7 7) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "bf5f7b0c-aad3-4511-b33b-3d621e265ae0"))
        (fp_arc (start -6.45 6.125) (mid -7.015685 5.890685) (end -7.25 5.325) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "52c8f288-5f28-4785-9235-ff6b3a62c3f9"))
        (fp_arc (start -3.45 6.125) (mid -2.742893 6.417893) (end -2.45 7.125) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "185f3332-d83f-4c91-b87e-9d9a4266f958"))
        (fp_arc (start -3.4 1.475) (mid -2.826423 1.655848) (end -2.460307 2.13298) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "769b844c-f110-4c11-9035-d713cd73473a"))
        (fp_arc (start -0.299999 3.624999) (mid -1.577272 3.167235) (end -2.455444 2.13293) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "6cdd5b51-7d25-4080-aa9e-c80f704c0050"))
    `
    const front_paste = `
    `
    const back_paste = `
    `
    const edge_cuts = `
    `
    const user_drawing = `
        (property "Reference" "${p.ref}" (at -4.3688 -2.3368 ${180 + p.rot}) (layer "Dwgs.User") (hide yes) (uuid "47ecae4d-8aae-4075-8b7e-5401b31551a0") (effects (font (size 1 1) (thickness 0.15))))
        (fp_line (start -13.5 -8.5) (end 13.5 -8.5) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (uuid "27785cae-f4bc-44d0-9ee3-40b94e4c9131"))
        (fp_line (start -13.5 8.5) (end -13.5 -8.5) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (uuid "d51ddcfb-342a-471d-a95a-31bc119b21d6"))
        (fp_line (start 13.5 -8.5) (end 13.5 8.5) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (uuid "ff8d3066-2e3b-4c4d-bc84-da132f08c2d5"))
        (fp_line (start 13.5 8.5) (end -13.5 8.5) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (uuid "691a518c-a72f-4493-b45f-0ae9caaa57f1"))
        (fp_text user "18x17 spacing" (at 0 -7.6 ${0 + p.rot}) (layer "Dwgs.User") (uuid "e4246470-0102-4a04-960a-8f155e3a0eaa") (effects (font (size 1 1) (thickness 0.15))))
    `
    const user_comments = `
        (fp_line (start -14.2875 -9.525) (end -14.2875 9.525) (stroke (width 0.12) (type solid)) (layer "Cmts.User") (uuid "43071c78-1b06-49de-86e7-59d585119c7e"))
        (fp_line (start -14.2875 9.525) (end 14.2875 9.525) (stroke (width 0.12) (type solid)) (layer "Cmts.User") (uuid "35414b7a-dce0-4696-b665-693689ca16ae"))
        (fp_line (start 14.2875 -9.525) (end -14.2875 -9.525) (stroke (width 0.12) (type solid)) (layer "Cmts.User") (uuid "58bc6027-8711-4029-9ee2-f65048a40434"))
        (fp_line (start 14.2875 9.525) (end 14.2875 -9.525) (stroke (width 0.12) (type solid)) (layer "Cmts.User") (uuid "2f7293ae-447c-4d07-b5c2-ce06e30cf2e9"))
        (fp_rect (start -2.75 -6.405) (end 2.75 -3.455) (stroke (width 0.1) (type default)) (fill none) (layer "Cmts.User") (uuid "1b48d640-094c-4c3a-b486-05044ae3a4f6"))
        (fp_text user "19.05 spacing" (at 0 -8.7 ${0 + p.rot}) (layer "Cmts.User") (uuid "4a0c9468-9921-44fa-8afb-3525319ed2f7") (effects (font (size 1 1) (thickness 0.15))))
        (fp_text user "LED" (at 0 -4.7625 ${0 + p.rot}) (unlocked yes) (layer "Cmts.User") (uuid "6c4ff8fd-df4c-4395-a50f-159bf6c53ab5") (effects (font (size 1 1) (thickness 0.15))))
    `
    const user_eco1 = `
    `
    const user_eco2 = `
        (fp_line (start -6.95 6.45) (end -6.95 -6.45) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "43f89897-316d-4071-9a1a-ecf185a7209b"))
        (fp_line (start -6.45 -6.95) (end 6.45 -6.95) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "6461143f-115c-44ea-a6ff-6bcd274b0905"))
        (fp_line (start 6.45 6.95) (end -6.45 6.95) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "97527f4c-22ae-4eba-98d7-0d6a79e53429"))
        (fp_line (start 6.95 -6.45) (end 6.95 6.45) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "34e3983b-2aca-4d7e-8576-657f98c1bcf9"))
        (fp_arc (start -6.95 -6.45) (mid -6.803553 -6.803553) (end -6.45 -6.95) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "796a4bc0-9292-48a2-9045-32e450195cbd"))
        (fp_arc (start -6.45 6.95) (mid -6.803553 6.803553) (end -6.95 6.45) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "504be99b-320a-497f-ad11-ab163996c7d4"))
        (fp_arc (start -6.45 6.95) (mid -6.803553 6.803553) (end -6.95 6.45) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "83416b73-98d8-4fbf-8b56-df65f47915cb"))
        (fp_arc (start -6.45 6.95) (mid -6.803553 6.803553) (end -6.95 6.45) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "cacffe13-ca50-49bb-b39b-05ab3fc4053f"))
        (fp_arc (start 6.45 -6.95) (mid 6.803553 -6.803553) (end 6.95 -6.45) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "48ea72d8-7316-4ba8-9009-1b2655e0d5cc"))
        (fp_arc (start 6.95 6.45) (mid 6.803553 6.803553) (end 6.45 6.95) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "9b1eda85-b98e-4c3c-83ca-03a641f4ed3c"))
        (fp_arc (start 6.95 6.45) (mid 6.803553 6.803553) (end 6.45 6.95) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "a47be684-0fbf-47f6-8353-8d5e00746d73"))
    `
    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/Hot Swap/choc.step" (offset (xyz -5 -3.75 -3.5)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 180)))
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/Key Switch/Choc-V1-red.step" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/Keycaps/Kailh Choc FunkMonk 1_5u.step" (offset (xyz 0 0 2.5)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
    `
    const standard_closing = `
            )

    `
    let final = standard_opening;
    final += front_pads;
    final += pads;
    final += back_pads;
    final += front_silkscreen;
    final += back_silkscreen;
    final += front_fabrication;
    final += back_fabrication;
    final += front_mask;
    final += back_mask;
    final += front_courtyard;
    final += back_courtyard;
    final += front_paste;
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