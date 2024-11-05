module.exports = {
  params: {
    designator: 'J',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,     // delete if not needed
    P1: {type: 'net', value: undefined}, // change to undefined as needed
    P2: {type: 'net', value: undefined}, // change to undefined as needed
    P3: {type: 'net', value: undefined}, // change to undefined as needed
    MP: {type: 'net', value: 'MP'}, // undefined}, // change to undefined as needed
  },
  body: p => {
    let fp_name="Molex_Pico-EZmate_78171-0003_1x03-1MP_P1.20mm_Vertical"
    if (p.reversible) {
        fp_name = "TB2086_MISC:" + fp_name + "_rev";
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (descr "Molex Pico-EZmate series connector, 78171-0003 (http://www.molex.com/pdm_docs/sd/781710002_sd.pdf), generated with kicad-footprint-generator")
        (tags "connector Molex Pico-EZmate side entry")
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (property "Reference" "${p.ref}" (at 0 -3.5 ${0 + p.rot}) (layer "F.SilkS") (hide yes) (uuid "a8c815e7-0c07-41a6-9af9-e7bbddebf29a") (effects (font (size 1 1) (thickness 0.15))))
        (fp_line (start -2.81 -2.09) (end -1.76 -2.09) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "a460e6db-9be1-4139-a9f5-a9081bbb729c"))
        (fp_line (start -2.81 1.24) (end -2.81 -2.09) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "1ca56905-b826-4162-80a0-f0ef6cf4cd77"))
        (fp_line (start -1.76 -2.09) (end -1.76 -2.3) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "4a026f78-3830-4e7a-90f2-7e47630645e8"))
        (fp_line (start -1.74 2.63) (end -1.24 2.63) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "bb9a98b3-de9d-492a-8439-954e5a70645c"))
        (fp_line (start -1.45 -3.153553) (end -1.2 -2.8) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "28ce12d7-63c5-4183-8903-fbc2ffc9bf44"))
        (fp_line (start -1.24 2.63) (end -0.94 2.13) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "78328a16-fc47-4b79-8fba-11ae6bf625ba"))
        (fp_line (start -1.2 -2.8) (end -0.95 -3.153553) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "31741a30-bf9c-4f57-95eb-7467c7fe19b4"))
        (fp_line (start -0.95 -3.153553) (end -1.45 -3.153553) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "d81cdea0-36bf-4e02-b374-8aa959877442"))
        (fp_line (start -0.94 2.13) (end 0.94 2.13) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "af11637e-b1ab-4762-a6ed-637c66514e25"))
        (fp_line (start 0.94 2.13) (end 1.24 2.63) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "cc0444b9-c3a4-474b-8f36-fdf3b9a7bd01"))
        (fp_line (start 1.24 2.63) (end 1.74 2.63) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "16bb59fa-2b64-4c65-a771-39d1e1aae0c2"))
        (fp_line (start 2.81 -2.09) (end 1.76 -2.09) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "0a24682b-9b7f-4eb2-92fc-2127743d9b7e"))
        (fp_line (start 2.81 1.24) (end 2.81 -2.09) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "6bd5c7ae-27d9-4acc-a06a-53e61de4ac39"))
    `
    const front_pads = `
        (pad "1" smd roundrect (at -1.2 -1.875 ${p.rot}) (size 0.6 0.85) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (uuid "af61cb9c-b49f-45ad-bb64-33c89ef22706") ${p.P1})
        (pad "2" smd roundrect (at 0 -1.875 ${p.rot}) (size 0.6 0.85) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (uuid "5c975d90-9726-428e-9d9c-32f0ef81620a") ${p.P2})
        (pad "3" smd roundrect (at 1.2 -1.875 ${p.rot}) (size 0.6 0.85) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (uuid "a5ce8e26-9135-4c15-bacd-f7bf986ceb0c") ${p.P3})
        (pad "MP" smd roundrect (at -2.35 1.9 ${p.rot}) (size 0.7 0.8) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (uuid "dd9081c4-651a-4e56-8b03-b539ab90ef37") ${p.MP})
        (pad "MP" smd roundrect (at 2.35 1.9 ${p.rot}) (size 0.7 0.8) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (uuid "d47fd00f-215c-46cc-b321-abc434fa5354") ${p.MP})
    `
    const front_fabrication = `
        (property "Value" "Molex_Pico-EZmate_78171-0003_1x03-1MP_P1.20mm_Vertical_rev" (at 0 3.72 ${0 + p.rot}) (layer "F.Fab") (uuid "22141d91-adbf-4cfe-9f6a-30fd1aa7cd89") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "dcf6fad7-cf73-42e8-b6db-915c152ab2d3") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "4b916be1-8478-43e3-bf25-bb1a803a3d52") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "d2c14e98-7c2d-497f-b387-1d98acd929d3") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_line (start -2.7 -1.98) (end -2.7 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "a6f03fa0-9dc0-4d17-a836-1ece02eb85e1"))
        (fp_line (start -2.7 -1.98) (end 2.7 -1.98) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "cc0b05ac-5816-4de1-9ac5-29d6a4da82c4"))
        (fp_line (start -2.7 2.52) (end -1.35 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "9711c19f-95d0-4424-bbc5-72616d2e5407"))
        (fp_line (start -1.7 -1.98) (end -1.2 -1.272893) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "d0c9d1e0-a697-497e-84ef-3dc2bbfd2a68"))
        (fp_line (start -1.35 2.52) (end -1.05 2.02) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "bf6a9622-3e56-48a6-ba8a-8d4737a4d82b"))
        (fp_line (start -1.2 -1.272893) (end -0.7 -1.98) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "6194ad05-e9e2-45f4-867c-c7f398692032"))
        (fp_line (start -1.05 2.02) (end 1.05 2.02) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "d3cffa01-7b3d-4666-9590-ec978d7fc341"))
        (fp_line (start 1.05 2.02) (end 1.35 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "84c6e6a9-21c1-46bb-adcc-230f67378e9a"))
        (fp_line (start 1.35 2.52) (end 2.7 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "d5d97cb2-6c75-4c20-b53a-4aa165414b41"))
        (fp_line (start 2.7 -1.98) (end 2.7 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "dff5da2a-b6a9-4500-ab98-82b5e2854684"))
        (fp_text user "${p.ref}" (at 0 0.27 ${0 + p.rot}) (layer "F.Fab") (uuid "4013d7a7-b30b-475b-86e6-54325000f7cd") (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -3.2 -2.8) (end -3.2 3.02) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "cf3cd048-270b-4386-ab47-0d734f7867f2"))
        (fp_line (start -3.2 3.02) (end 3.2 3.02) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "2ae181a2-a5b1-4f8a-9973-2b01e0c7c4bc"))
        (fp_line (start 3.2 -2.8) (end -3.2 -2.8) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "e6b7e7da-b385-4f9c-bd2a-0a30f220aae9"))
        (fp_line (start 3.2 3.02) (end 3.2 -2.8) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "229cb506-a39d-4c8d-98a9-b9eca66d1f6f"))
    `
    const front_paste = `
    `
    const pads = `
    `
    const back_silkscreen = `
        (property "Reference" "${p.ref}" (at 0 -3.5 ${0 + p.rot}) (layer "B.SilkS") (hide yes) (uuid "a8c815e7-0c07-41a6-9af9-e7bbddebf29a") (effects (font (size 1 1) (thickness 0.15))))
        (fp_line (start -2.81 -2.09) (end -1.76 -2.09) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "ef6516b4-b751-4122-8c51-b1e20fae39cf"))
        (fp_line (start -2.81 1.24) (end -2.81 -2.09) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "b02a0302-3cd7-479f-9d8b-4283c0f25e03"))
        (fp_line (start -1.24 2.63) (end -1.74 2.63) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "39ccfaba-443a-4026-9830-2b5701affcd4"))
        (fp_line (start -0.94 2.13) (end -1.24 2.63) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "ff5be09c-25f2-4905-aac9-4431644bda73"))
        (fp_line (start 0.94 2.13) (end -0.94 2.13) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "8edf20ff-bbd4-4142-b1e3-a8dc1e8a873e"))
        (fp_line (start 0.95 -3.153553) (end 1.45 -3.153553) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "4cda1417-2c42-45b5-8952-e6f2f1328d86"))
        (fp_line (start 1.2 -2.8) (end 0.95 -3.153553) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "60ad30bc-68bd-4042-8057-a597ff94cbdb"))
        (fp_line (start 1.24 2.63) (end 0.94 2.13) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "994da1c1-deb3-436a-ad6d-0a706ea9570f"))
        (fp_line (start 1.45 -3.153553) (end 1.2 -2.8) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "7c26cf9c-173f-4174-b401-0e36dc70ae19"))
        (fp_line (start 1.74 2.63) (end 1.24 2.63) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "93cd8484-b029-440e-a421-599823db9b72"))
        (fp_line (start 1.76 -2.09) (end 1.76 -2.3) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "fdc88c6e-9e65-4ddb-844f-c01a7eec2f43"))
        (fp_line (start 2.81 -2.09) (end 1.76 -2.09) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "c8a234b6-1acd-4ede-8f3f-98c839f94d29"))
        (fp_line (start 2.81 1.24) (end 2.81 -2.09) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "c1326b5c-a7a6-4049-9344-ec4c3fb300cf"))
    `
    const back_pads = `
        (pad "1" smd roundrect (at 1.2 -1.875 ${p.rot}) (size 0.6 0.85) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (uuid "0c2d29d1-f34b-494f-b050-19f38dbcedde") ${p.P1})
        (pad "2" smd roundrect (at 0 -1.875 ${p.rot}) (size 0.6 0.85) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (uuid "a47aa939-82ae-4814-9546-71144bc76ee9") ${p.P2})
        (pad "3" smd roundrect (at -1.2 -1.875 ${p.rot}) (size 0.6 0.85) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (uuid "ef3b3e95-bdac-42e5-9dd3-7dade986f845") ${p.P3})
        (pad "MP" smd roundrect (at -2.35 1.9 ${p.rot}) (size 0.7 0.8) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (uuid "eb21ebe3-6eec-4b76-b0b3-af6c6a225b72") ${p.MP})
        (pad "MP" smd roundrect (at 2.35 1.9 ${p.rot}) (size 0.7 0.8) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (uuid "7271ca8a-10f9-4861-ae2b-ef44d0d276cb") ${p.MP})
    `
    const back_fabrication = `
    `
    const back_mask = `
    `
    const back_courtyard = `
        (fp_line (start -3.2 -2.8) (end 3.2 -2.8) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "4e411dbf-88ff-48cf-a701-57ebf0a7ca04"))
        (fp_line (start -3.2 3.02) (end -3.2 -2.8) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "6ed5f4a3-51e7-46e6-a732-b04055781866"))
        (fp_line (start 3.2 -2.8) (end 3.2 3.02) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "997d9ebb-c11c-4f82-bdd9-54ddef79158d"))
        (fp_line (start 3.2 3.02) (end -3.2 3.02) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "35e36a0c-cad1-48f6-a000-a3f9d8218d8b"))
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
    let offset = "(xyz 1.25 -2.4 0)"
    let rotate = "(xyz 0 0 0)"
    if (p.side == "B") {
        offset = "(xyz -1.25 -2.4 -1.9)"
        rotate = "(xyz 0 180 0)"
    }
    const model = `
        (model "\${KIPRJMOD}/packages3D/781710003.step" (offset ${offset}) (scale (xyz 1 1 1)) (rotate ${rotate}))
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
