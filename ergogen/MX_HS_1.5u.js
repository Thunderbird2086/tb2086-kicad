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
         footprint "SW_MX_HS_1.5u_reversible"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (descr "Footprint for Cherry MX style switches with Kailh hotswap socket")
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_pads = `
        (pad "1" smd roundrect (at 6.535 -2.54 ${p.rot}) (size 4.2 2.5) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.1) (uuid "82fc4a10-1014-453c-bdef-60515ab8a739") ${p.P1})
        (pad "2" smd roundrect (at -5.265 -5.08 ${p.rot}) (size 4.2 2.5) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.1) (uuid "41da3ea1-58d0-4aba-93f7-8ce2af6a53bb") ${p.P2})
    `
    const pads = `
        (pad "" np_thru_hole circle (at -5.08 0 ${p.rot}) (size 1.75 1.75) (drill 1.75) (layers "*.Mask") (uuid "ec8122ca-7f62-429e-878f-11558e016561"))
        (pad "" np_thru_hole circle (at 0 0 ${p.rot}) (size 3.9878 3.9878) (drill 3.9878) (layers "*.Cu" "*.Mask") (uuid "e51bca19-f6a2-465e-ad69-da03145fe870"))
        (pad "" np_thru_hole circle (at 5.08 0 ${p.rot}) (size 1.75 1.75) (drill 1.75) (layers "*.Mask") (uuid "cc9b3f43-dda1-4ddd-b125-29d2dfb90375"))
        (pad "1" thru_hole circle (at 2.54 -5.08 ${p.rot}) (size 3.3 3.3) (drill 3) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "1d1345e7-75a1-489b-8eaf-d6c6987d0d90") ${p.P1})
        (pad "1" thru_hole circle (at 3.81 -2.54 ${p.rot}) (size 3.3 3.3) (drill 3) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "b9561699-92f0-417b-a0cb-f2c91033990d") ${p.P1})
        (pad "2" thru_hole circle (at -3.81 -2.54 ${p.rot}) (size 3.3 3.3) (drill 3) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "a6a6c5f9-9578-4717-b49d-944b00875e92") ${p.P2})
        (pad "2" thru_hole circle (at -2.54 -5.08 ${p.rot}) (size 3.3 3.3) (drill 3) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "3663e1f7-ba20-4bc0-91e1-db141439ae5e") ${p.P2})
    `
    const back_pads = `
        (pad "1" smd roundrect (at 5.265 -5.08 ${p.rot}) (size 4.2 2.5) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.1) (uuid "83c69d13-979e-4b0f-bc3c-e4a1b26caba5") ${p.P1})
        (pad "2" smd roundrect (at -6.535 -2.54 ${p.rot}) (size 4.2 2.5) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.1) (uuid "9ceba96c-838a-4c2a-baef-4b9676665a51") ${p.P2})
    `
    const front_silkscreen = `
        (fp_line (start -4.864824 -6.75022) (end -4.864824 -6.52022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "d381d4ca-5cd0-4220-9961-02644e2d5bfd"))
        (fp_line (start -4.864824 -3.67022) (end -4.864824 -3.20022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "5c2379a9-3f3c-41c8-b2c1-13dd0d7eda39"))
        (fp_line (start -4.364824 -2.70022) (end 0.2 -2.70022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "5b8ed379-32a2-4903-8f04-972a50dfabb6"))
        (fp_line (start -3.314824 -6.75022) (end -4.864824 -6.75022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "79db6aae-f78b-4231-a9f0-2ef15b641e87"))
        (fp_line (start 4.085176 -6.75022) (end -1.814824 -6.75022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "001ce27a-9fdc-49a8-b6d1-5d752ffd842b"))
        (fp_line (start 6.085176 -3.95022) (end 6.085176 -4.75022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "b16dcf7d-67f6-4024-8fca-406dab44afbb"))
        (fp_line (start 6.085176 -1.10022) (end 6.085176 -0.86022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "9e488b8e-e5ce-48fc-ac5a-f90cf0b5ba97"))
        (fp_arc (start -4.364824 -2.70022) (mid -4.718377 -2.846667) (end -4.864824 -3.20022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "064d9923-9439-41ef-82a0-b36b88519e50"))
        (fp_arc (start 0.2 -2.70022) (mid 1.670693 -2.183637) (end 2.494322 -0.86022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "2de286cf-64a3-41f4-9ee8-cf3a55ee6f46"))
        (fp_arc (start 4.085176 -6.75022) (mid 5.49939 -6.164434) (end 6.085176 -4.75022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "71289227-281f-4c44-bb79-2b4ba669e71e"))
    `
    const back_silkscreen = `
        (fp_line (start -6.085176 -3.95022) (end -6.085176 -4.75022) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "98707b5c-2a0f-4226-b106-fa80ff883db5"))
        (fp_line (start -6.085176 -1.10022) (end -6.085176 -0.86022) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "38a1ba3a-7095-4c76-be69-6342a50e908e"))
        (fp_line (start -4.085176 -6.75022) (end 1.814824 -6.75022) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "7b4a1b3c-a454-43d7-b6e9-a9db8f19b2a1"))
        (fp_line (start 3.314824 -6.75022) (end 4.864824 -6.75022) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "8f42f0e6-7de0-4e93-bd28-cc4af1935503"))
        (fp_line (start 4.364824 -2.70022) (end -0.2 -2.70022) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "b6da7eec-dcd0-4c23-a4a5-94a600253c8d"))
        (fp_line (start 4.864824 -6.75022) (end 4.864824 -6.52022) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "c03e21bf-0f2e-4729-b13b-8eab3aceb075"))
        (fp_line (start 4.864824 -3.67022) (end 4.864824 -3.20022) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "233a7355-08dc-426f-a2e6-e3b310136fbb"))
        (fp_arc (start -6.085176 -4.75022) (mid -5.499392 -6.164436) (end -4.085176 -6.75022) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "cd12af30-ab43-4350-a9b8-1a10dd3c2db1"))
        (fp_arc (start -2.494322 -0.86022) (mid -1.670693 -2.183637) (end -0.2 -2.70022) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "4cc53292-3954-4f95-a1ef-60fcb65c3355"))
        (fp_arc (start 4.864824 -3.20022) (mid 4.718377 -2.846667) (end 4.364824 -2.70022) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "7fb63b78-8ce0-43ce-a55d-498eb12b9ff3"))
    `
    const front_fabrication = `
        (property "Reference" "${p.ref}" (at -4.4196 1.778 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "abcea926-33d8-442d-a367-35cda3816ca5") (effects (font (size 1 1) (thickness 0.15))))
        (property "Value" "SW_MX_HS_1.5u_reversible" (at 0 -8 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "930a4898-6462-4f61-bbad-855140dc5618") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "d574f85a-a608-422b-b149-b16e538f7051") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "8828a034-878f-42ec-8f92-fe367e520223") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "bed0ffc1-eb09-4087-9e23-6225c145d944") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text user "\${REFERENCE}" (at -1.7526 1.8288 ${0 + p.rot}) (layer "F.Fab") (uuid "d7f14a36-e6d1-4041-84e0-bc8624296775") (effects (font (size 1 1) (thickness 0.15))))
    `
    const back_fabrication = `
    `
    const front_mask = `
    `
    const back_mask = `
    `
    const front_courtyard = `
        (fp_line (start -7.414824 -6.32022) (end -4.864824 -6.32022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "ee246cbc-5f7b-478b-96e3-7b1b43564274"))
        (fp_line (start -7.414824 -3.87022) (end -7.414824 -6.32022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "80d67f52-2ded-43bd-8a31-2efce06698ec"))
        (fp_line (start -4.864824 -6.75022) (end -4.864824 -6.32022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "f370c876-b71f-4c1c-8f84-4e974b1a85be"))
        (fp_line (start -4.864824 -3.87022) (end -7.414824 -3.87022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "a4788c8d-5773-43fe-9711-99f01fa6cfd8"))
        (fp_line (start -4.864824 -3.87022) (end -4.864824 -2.70022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "db6a4193-7b6b-45ca-a1bc-47905534da96"))
        (fp_line (start -4.864824 -2.70022) (end 0.2 -2.70022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "4a5e41ed-c740-49f8-9cf9-dbcec681acf8"))
        (fp_line (start 4.085176 -6.75022) (end -4.864824 -6.75022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "a5716ec7-d302-4f0b-a96d-87b8b2e6d946"))
        (fp_line (start 6.085176 -3.75022) (end 6.085176 -4.75022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "3b63e359-1b65-4b4e-bd51-4dee4f5a5983"))
        (fp_line (start 6.085176 -3.75022) (end 8.685176 -3.75022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "ddcb8cd4-cc7d-4267-8d09-9fa061a3c486"))
        (fp_line (start 6.085176 -1.30022) (end 6.085176 -0.86022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "de5893a8-2200-4946-a35c-b9528c589728"))
        (fp_line (start 6.085176 -0.86022) (end 2.494322 -0.86022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "bd1e31ff-d4c1-4caf-870e-3b0e6936a811"))
        (fp_line (start 7 -7) (end -7 -7) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "10142ddb-54a6-433b-9cfe-c47834c9f16d"))
        (fp_line (start 8.685176 -3.75022) (end 8.685176 -1.30022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "df804509-025e-4a8e-aed0-dbf88fd6b19a"))
        (fp_line (start 8.685176 -1.30022) (end 6.085176 -1.30022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "b2d37bb8-2b99-40a0-a187-ff02374da389"))
        (fp_arc (start 0.2 -2.70022) (mid 1.670503 -2.183399) (end 2.494322 -0.86022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "9ad0aba3-9a14-4a88-a022-25e37e48460f"))
        (fp_arc (start 4.085176 -6.75022) (mid 5.49939 -6.164434) (end 6.085176 -4.75022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "e17116e0-a7d2-4a46-b359-1bdedd448c7a"))
    `
    const back_courtyard = `
        (fp_line (start -8.685176 -3.75022) (end -8.685176 -1.30022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "420769ad-ff05-48d7-adb0-9b652c12774e"))
        (fp_line (start -8.685176 -1.30022) (end -6.085176 -1.30022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "b945f304-62cb-4e9c-8c83-b2f66e4c3b46"))
        (fp_line (start -7 -7) (end 7 -7) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "d74315cd-e13a-47be-b549-ef750d4670cd"))
        (fp_line (start -7 7) (end -7 -7) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "1210dd5e-cb24-448e-8787-be6b70c9e12f"))
        (fp_line (start -6.085176 -3.75022) (end -8.685176 -3.75022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "5daba676-fb05-4e8a-a9fe-c1c0f31ae609"))
        (fp_line (start -6.085176 -3.75022) (end -6.085176 -4.75022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "2b3a0b23-1df9-4008-b7e6-692152003e23"))
        (fp_line (start -6.085176 -1.30022) (end -6.085176 -0.86022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "f71f5afe-2b4a-433d-8d6b-a55dddd4e78c"))
        (fp_line (start -6.085176 -0.86022) (end -2.494322 -0.86022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "3d3967e9-0ec4-48e1-96a3-b253287e27f8"))
        (fp_line (start -4.085176 -6.75022) (end 4.864824 -6.75022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "51cd766d-0679-4498-9bfa-05c12abe6e1f"))
        (fp_line (start 4.864824 -6.75022) (end 4.864824 -6.32022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "a8b1b643-01cb-459b-8a56-03cc17abed48"))
        (fp_line (start 4.864824 -3.87022) (end 4.864824 -2.70022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "473932df-7b19-4fa1-9de2-00af62cb2bec"))
        (fp_line (start 4.864824 -3.87022) (end 7.414824 -3.87022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "5af5b209-a30e-4f1c-bae5-3d29c901e849"))
        (fp_line (start 4.864824 -2.70022) (end -0.2 -2.70022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "18674aab-59ac-44e6-b22a-408b8f96e0e0"))
        (fp_line (start 7 -7) (end 7 7) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "df2f3fc1-ca01-44e9-9fde-a52c6de7d243"))
        (fp_line (start 7 7) (end -7 7) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "aea8023e-4745-4ffc-91dc-a313a21f6271"))
        (fp_line (start 7.414824 -6.32022) (end 4.864824 -6.32022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "4396cc15-3407-4541-9fb1-f478b25e6e92"))
        (fp_line (start 7.414824 -3.87022) (end 7.414824 -6.32022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "aba4aca1-6f43-441d-8d38-c569a16b042f"))
        (fp_arc (start -6.085176 -4.75022) (mid -5.499392 -6.164436) (end -4.085176 -6.75022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "97799ec1-9d4c-4c39-8c4a-41e4507de7e0"))
        (fp_arc (start -2.494322 -0.86022) (mid -1.670502 -2.183399) (end -0.2 -2.70022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "480816f6-dcdd-48dc-b84a-bdcc9c641548"))
    `
    const front_paste = `
    `
    const back_paste = `
    `
    const edge_cuts = `
    `
    const user_drawing = `
        (fp_line (start -14.2875 -9.525) (end 14.2875 -9.525) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (uuid "a31f43f6-b6d9-4483-a674-94f1db34162f"))
        (fp_line (start -14.2875 9.525) (end -14.2875 -9.525) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (uuid "bf15b8a6-9bbb-4908-86c7-8d06e6af5b91"))
        (fp_line (start 14.2875 -9.525) (end 14.2875 9.525) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (uuid "0fcfea95-fc92-4485-aee9-60a427cf7d8f"))
        (fp_line (start 14.2875 9.525) (end -14.2875 9.525) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (uuid "df2ec725-19a7-4b9c-bd73-f18bfa49b651"))
    `
    const user_comments = `
        (fp_rect (start -3.8 3.08) (end 3.8 7.08) (stroke (width 0.12) (type default)) (fill none) (layer "Cmts.User") (uuid "2d6c3e76-61dd-4162-b644-194eb984bae7"))
        (fp_text user "LED" (at -1.27 5.6896 ${0 + p.rot}) (unlocked yes) (layer "Cmts.User") (uuid "c37a3fe8-61cd-49bc-9b9a-97b6e486aae9") (effects (font (size 1 1) (thickness 0.15)) (justify left bottom)))
    `
    const user_eco1 = `
        (fp_rect (start -7 -7) (end 7 7) (stroke (width 0.12) (type default)) (fill none) (layer "Eco1.User") (uuid "0c6374b3-d720-42a8-95f2-e2d3c4d97f53"))
    `
    const user_eco2 = `
        (fp_line (start -7 -6.5) (end -7 6.5) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "510ee886-be4f-4140-89a6-ee031606b5dc"))
        (fp_line (start -6.5 -7) (end 6.5 -7) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "221f6d4c-631f-4204-978a-4c0d5bd54f88"))
        (fp_line (start -6.5 7) (end 6.5 7) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "a52ac084-eaef-4e90-81e8-82e787aa3040"))
        (fp_line (start 6.5 -7) (end -6.5 -7) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "19a36bf6-7410-45f1-9652-31f75e453ee9"))
        (fp_line (start 7 6.5) (end 7 -6.5) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "56be4aa7-7a3c-476c-b27e-2ef4f3d2dfd1"))
        (fp_arc (start -7 -6.5) (mid -6.853553 -6.853553) (end -6.5 -7) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "1c11e714-3f77-4789-a7d0-2a8d463e3ed4"))
        (fp_arc (start -7 -6.5) (mid -6.853553 -6.853553) (end -6.5 -7) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "61e032e0-55a3-4226-85d9-934b7bfc23a4"))
        (fp_arc (start -6.497236 6.998884) (mid -6.850789 6.852437) (end -6.997236 6.498884) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "b9341a1b-dc6a-4f93-856e-36020ce9d7b5"))
        (fp_arc (start 6.5 -7) (mid 6.853553 -6.853553) (end 7 -6.5) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "1d0a45f7-48eb-4304-add5-db2540e295d5"))
        (fp_arc (start 6.5 -7) (mid 6.853553 -6.853553) (end 7 -6.5) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "e9a13454-bc27-45d2-85ca-992e8ea28785"))
        (fp_arc (start 7 6.5) (mid 6.853553 6.853553) (end 6.5 7) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "04b68965-2fdb-4122-8486-fb22ad930f20"))
    `
    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/Hot Swap/mx.step" (offset (xyz -3.81 2.54 -3.5)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/Key Switch/Cherry-MX-silent_alpaca.step" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/Keycaps/DSA_1.5u.step" (offset (xyz 0 0 12)) (scale (xyz 1 1 1)) (rotate (xyz -90 0 0)))
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
    final += back_pads;
    final += back_silkscreen;
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
