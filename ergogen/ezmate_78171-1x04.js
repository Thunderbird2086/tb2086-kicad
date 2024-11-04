module.exports = {
  params: {
    designator: 'J',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,     // delete if not needed
    MP: {type: 'net', value: 'MP'},
    P3: {type: 'net', value: undefined},
    P2: {type: 'net', value: undefined},
    P4: {type: 'net', value: undefined},
    P1: {type: 'net', value: undefined},
  },
  body: p => {
    let fp_name="Molex_Pico-EZmate_78171-0004_1x04-1MP_P1.20mm_Vertical";
    if (p.reversible) {
        fp_name = "TB2086_MISC:" + fp_name + "_rev";
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (descr "Molex Pico-EZmate series connector, 78171-0004 (http://www.molex.com/pdm_docs/sd/781710002_sd.pdf), generated with kicad-footprint-generator")
        (tags "connector Molex Pico-EZmate side entry")
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (property "Reference" "${p.ref}" (at 0.56 -3.98 ${0 + p.rot}) (layer "F.SilkS") (hide yes) (uuid "c8f9ab40-ff79-4e81-b9a4-b7a17ee02704") (effects (font (size 1 1) (thickness 0.15))))
        (fp_line (start -3.41 -2.09) (end -2.36 -2.09) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "6effa08d-8078-4042-ab0a-b451c0dbaa5b"))
        (fp_line (start -3.41 1.24) (end -3.41 -2.09) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "135246b8-640b-4877-a828-30efb110d58e"))
        (fp_line (start -2.36 -2.09) (end -2.36 -2.3) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "6e76cb3e-288b-4636-9c7a-6268c2c80f60"))
        (fp_line (start -2.34 2.63) (end -1.84 2.63) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "cb6302ae-89bc-4e24-b8be-ae87894fce44"))
        (fp_line (start -2.05 -3.153553) (end -1.8 -2.8) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "259539da-797c-4086-b345-9920b68e7494"))
        (fp_line (start -1.84 2.63) (end -1.54 2.13) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "ebd11de2-7d78-42d6-b1b5-2d3c6fe3ea7c"))
        (fp_line (start -1.8 -2.8) (end -1.55 -3.153553) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "7a51ffda-ad73-4fd0-b637-e8569a41520a"))
        (fp_line (start -1.55 -3.153553) (end -2.05 -3.153553) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "23cfea99-66c7-461b-8428-b9394f396d8b"))
        (fp_line (start -1.54 2.13) (end 1.54 2.13) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "780217f4-f71e-424f-8bbb-471391bf335b"))
        (fp_line (start 1.54 2.13) (end 1.84 2.63) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "19fc5107-e287-4c05-8644-31d69653dbb5"))
        (fp_line (start 1.84 2.63) (end 2.34 2.63) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "e9d116f1-28a0-4a37-96df-761701915f38"))
        (fp_line (start 3.41 -2.09) (end 2.36 -2.09) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "786dee69-3db4-4298-9f97-8a9e84492c17"))
        (fp_line (start 3.41 1.24) (end 3.41 -2.09) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "9fe9e917-4814-4603-a922-1649dee0cb62"))
    `
    const front_pads = `
        (pad "1" smd roundrect (at -1.8 -1.875 ${p.rot}) (size 0.6 0.85) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (uuid "1d84b05d-356d-4d09-9157-2bcbfa4973f7") ${p.P1})
        (pad "2" smd roundrect (at -0.6 -1.875 ${p.rot}) (size 0.6 0.85) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (uuid "f776ae96-db2a-4c49-8ba6-fcafd411f3b4") ${p.P2})
        (pad "3" smd roundrect (at 0.6 -1.875 ${p.rot}) (size 0.6 0.85) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (uuid "3254e148-0203-4d2f-94fd-4f7d12d30c0f") ${p.P3})
        (pad "4" smd roundrect (at 1.8 -1.875 ${p.rot}) (size 0.6 0.85) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (uuid "6f5ddf05-6960-4d0d-8eda-88a92277a457") ${p.P4})
        (pad "MP" smd roundrect (at -2.95 1.9 ${p.rot}) (size 0.7 0.8) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (uuid "308b10b1-7940-4d31-92a7-cf52047ada04") ${p.MP})
        (pad "MP" smd roundrect (at 2.95 1.9 ${p.rot}) (size 0.7 0.8) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (uuid "7b2ee134-280a-4a8c-b19e-1f6c1717cc02") ${p.MP})
    `
    const front_fabrication = `
        (property "Value" "${fp_name}" (at 0 3.72 ${0 + p.rot}) (layer "F.Fab") (uuid "7d1af4ba-34a7-44ff-9318-c11f9f36a30e") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "d9498f71-f4a2-413a-aa33-bc8b477387a1") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "eb1263d3-7ad6-482d-a363-84e085612f97") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "ed8febca-72b2-436d-9f44-9eab7545ba7c") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_line (start -3.3 -1.98) (end -3.3 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "530393aa-bec9-48de-9224-21c878b7f0c3"))
        (fp_line (start -3.3 -1.98) (end 3.3 -1.98) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "37b79e96-9737-4c24-8c17-2c113abf4479"))
        (fp_line (start -3.3 2.52) (end -1.95 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "31658d3d-d3eb-49d1-b28e-c48ee80ed13e"))
        (fp_line (start -2.3 -1.98) (end -1.8 -1.272893) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "d8b716d9-8fc5-4ad2-9f6f-22c9cfa2d537"))
        (fp_line (start -1.95 2.52) (end -1.65 2.02) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "e6387066-fea4-4db7-8715-9c38f3c48637"))
        (fp_line (start -1.8 -1.272893) (end -1.3 -1.98) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "44e797f1-3dcb-41f3-9dc0-6314a37f59e7"))
        (fp_line (start -1.65 2.02) (end 1.65 2.02) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "7a309a0d-edd4-47bf-ba95-831b58033190"))
        (fp_line (start 1.65 2.02) (end 1.95 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "5f203e8b-c938-4be1-8b0f-a1caa18478ed"))
        (fp_line (start 1.95 2.52) (end 3.3 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "57587775-a846-489d-b344-9e7a7ec0f37e"))
        (fp_line (start 3.3 -1.98) (end 3.3 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "70d75675-34c7-49b6-ab4b-f82bb4eb7205"))
        (fp_text user "${p.ref}" (at 0 0.27 ${0 + p.rot}) (layer "F.Fab") (uuid "6354ad7e-67b5-4511-b8f4-048342d1a092") (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -3.8 -2.8) (end -3.8 3.02) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "a6b4b68d-f8d7-4228-98c9-bf9d61ef15fc"))
        (fp_line (start -3.8 3.02) (end 3.8 3.02) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "633c8d08-82dc-47d3-8e7e-27b2ff596ae1"))
        (fp_line (start 3.8 -2.8) (end -3.8 -2.8) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "227caf5c-3144-49a2-83c8-63fce7fbaa18"))
        (fp_line (start 3.8 3.02) (end 3.8 -2.8) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "a0e1f993-33ec-4fd3-83b4-f84bfadef737"))
    `
    const front_paste = `
    `
    const pads = `
    `
    const back_silkscreen = `
        (fp_line (start -3.41 -2.09) (end -2.36 -2.09) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "d6b7e5c6-e429-4fd7-bd0a-a6c9a11b5052"))
        (fp_line (start -3.41 1.24) (end -3.41 -2.09) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "a588d18c-5dd0-4ac7-b736-9308491053c3"))
        (fp_line (start -1.84 2.63) (end -2.34 2.63) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "d2e5b251-5e13-40d2-b783-cc5edb145b37"))
        (fp_line (start -1.54 2.13) (end -1.84 2.63) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "dc898e2b-fda2-4d8f-aeb1-9f85586195db"))
        (fp_line (start 1.54 2.13) (end -1.54 2.13) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "6c9b7633-a4e8-4672-91f3-a57a4f4b583a"))
        (fp_line (start 1.55 -3.153553) (end 2.05 -3.153553) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "1d9f3d28-1f6e-4fd8-9345-d602afb53a73"))
        (fp_line (start 1.8 -2.8) (end 1.55 -3.153553) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "25354d59-fc90-42de-be9b-d4bc5dda5b2a"))
        (fp_line (start 1.84 2.63) (end 1.54 2.13) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "593abbd3-c5dd-4263-8ef1-cda538de87a7"))
        (fp_line (start 2.05 -3.153553) (end 1.8 -2.8) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "5946dd60-9589-45c5-ba12-8c7448561197"))
        (fp_line (start 2.34 2.63) (end 1.84 2.63) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "8db7d87e-2818-42cc-9fbb-77c77d7b247d"))
        (fp_line (start 2.36 -2.09) (end 2.36 -2.3) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "900d1b45-166c-44fc-a61d-6a1f2dbdaa74"))
        (fp_line (start 3.41 -2.09) (end 2.36 -2.09) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "682c1427-de05-4107-a022-df484f4f47ec"))
        (fp_line (start 3.41 1.24) (end 3.41 -2.09) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "e6209e87-3458-479c-971e-1671b90f4b8b"))
    `
    const back_pads = `
        (pad "1" smd roundrect (at 1.8 -1.875 ${p.rot}) (size 0.6 0.85) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (uuid "81edf403-bf29-44a0-a5be-c9369653f56f") ${p.P1})
        (pad "2" smd roundrect (at 0.6 -1.875 ${p.rot}) (size 0.6 0.85) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (uuid "c2dc492e-c6be-4825-905e-8b3e2d598721") ${p.P2})
        (pad "3" smd roundrect (at -0.6 -1.875 ${p.rot}) (size 0.6 0.85) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (uuid "b83ff52a-2bb2-4ba8-8f8b-d89ed0baa137") ${p.P3})
        (pad "4" smd roundrect (at -1.8 -1.875 ${p.rot}) (size 0.6 0.85) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (uuid "76e4f151-e650-4667-9482-7d6e5441dfbf") ${p.P4})
        (pad "MP" smd roundrect (at -2.95 1.9 ${p.rot}) (size 0.7 0.8) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (uuid "b2317336-6333-48bd-82b3-9c74a22758a3") ${p.MP})
        (pad "MP" smd roundrect (at 2.95 1.9 ${p.rot}) (size 0.7 0.8) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (uuid "b0a8ddb6-d674-480a-8bd7-a26290937302") ${p.MP})
    `
    const back_fabrication = `
        (fp_line (start -3.3 -1.98) (end -3.3 2.52) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "5719854a-8516-4ba8-8ab7-f07e05e74431"))
        (fp_line (start -1.95 2.52) (end -3.3 2.52) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "acda78db-de1e-4896-acb3-60609f29ea93"))
        (fp_line (start -1.65 2.02) (end -1.95 2.52) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "0a33b179-5371-421c-b44a-d758122fbe23"))
        (fp_line (start 1.65 2.02) (end -1.65 2.02) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "5418977c-1903-477c-8dfb-a1e2895066e8"))
        (fp_line (start 1.8 -1.272893) (end 1.3 -1.98) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "0cd77ba8-8734-45f4-8c38-1ec07e3f8b17"))
        (fp_line (start 1.95 2.52) (end 1.65 2.02) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "ccbcc0a4-65d3-427e-9073-0027cbfe3045"))
        (fp_line (start 2.3 -1.98) (end 1.8 -1.272893) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "b388e69e-6a31-4b74-af96-fefe9ae02c9b"))
        (fp_line (start 3.3 -1.98) (end -3.3 -1.98) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "a95f4306-7d7e-4b9e-b090-196fb77682f0"))
        (fp_line (start 3.3 -1.98) (end 3.3 2.52) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "04e301b2-897e-4115-98e2-87ec83d67209"))
        (fp_line (start 3.3 2.52) (end 1.95 2.52) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "82c6a92b-fe37-428d-bf0e-2b94917193be"))
    `
    const back_mask = `
    `
    const back_courtyard = `
        (fp_line (start -3.8 -2.8) (end 3.8 -2.8) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "45d045cb-eb48-40f1-8915-c1fd04877f52"))
        (fp_line (start -3.8 3.02) (end -3.8 -2.8) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "ee2a5ce2-c730-4370-aa62-4d48d6f948f2"))
        (fp_line (start 3.8 -2.8) (end 3.8 3.02) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "67753d89-77b3-4d48-a98a-552dd61969d6"))
        (fp_line (start 3.8 3.02) (end -3.8 3.02) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "e22d1f6f-15cf-40c6-be5f-9560f2a38c96"))
    `
    const back_paste = `
    `
    const edge_cuts = `
    `
    const user_drawing = `
    `
    const user_comments = `
    `
    const user_eco1 = `
    `
    const user_eco2 = `
    `
    let offset = "(xyz 1.8 -2.4 0.25)"
    let rotate = "(xyz 0 0 0)"
    if (p.side == "B") {
        offset = "(xyz -1.8 -2.4 -2.1)"
        rotate = "(xyz 0 180 0)"
    }
    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/781710004.step" (offset ${offset}) (scale (xyz 1 1 1)) (rotate ${rotate}))
    `
    const standard_closing = `
            )
    `
    let final = standard_opening;
    if (p.reversible || p.side == "F") {
       final += front_silkscreen;
       final += front_pads;
       final += front_fabrication;
       final += front_mask;
       final += front_courtyard;
       final += front_paste;
    }

    final += pads;

    if (p.reversible || p.side == "B") {
        final += back_silkscreen;
        final += back_pads;
        final += back_fabrication;
        final += back_mask;
        final += back_courtyard;
        final += back_paste;
    }

    final += edge_cuts;
    final += user_drawing;
    final += user_comments;
    final += user_eco1;
    final += user_eco2;

    if (p.show_3d) {
        final += model;
    }
    final += standard_closing;

    return final
  }
}
