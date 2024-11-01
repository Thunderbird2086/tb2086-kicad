module.exports = {
  params: {
    designator: 'TRRS',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,     // delete if not needed
    C: {type: 'net', value: 'C'}, // undefined, // change to undefined as needed
    D: {type: 'net', value: 'D'}, // undefined, // change to undefined as needed
    A: {type: 'net', value: 'A'}, // undefined, // change to undefined as needed
    B: {type: 'net', value: 'B'}, // undefined, // change to undefined as needed
  },
  body: p => {
    const standard_opening = `(
         footprint "TRRS-PJ-320A-rev"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (attr through_hole)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_line (start -3 0) (end 3 0) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "03dea40d-e91a-4b24-aa5b-708171a239ed"))
        (fp_line (start -3 12) (end -3 0) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "c3b02967-ed92-42cb-87a0-ceea76b2e9ab"))
        (fp_line (start 3 0) (end 3 12) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "3898b45c-0f18-4de0-95a4-60204e2d6b98"))
        (fp_line (start 3 12) (end -3 12) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "69409e19-b12a-46c4-91c9-48a515c43efc"))
        (fp_text user "TRRS" (at -0.75 6.45 ${0 + p.rot}) (layer "F.SilkS") (hide yes) (uuid "d733c401-514d-4af5-ac7e-5d73b8bb6c98") (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_pads = `
    `
    const front_fabrication = `
        (property "Reference" "${p.ref}" (at -0.85 4.95 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "c82d1e33-0f8a-4e7d-9d60-c12ce216083e") (effects (font (size 1 1) (thickness 0.15))))
        (property "Value" "TRRS-PJ-320A-rev" (at 0 14 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "a03a5d5e-2da7-45ae-9c8c-db7cb2c071f2") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "089d9085-97b8-4c02-8791-75e0a1bd8df8") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "7c58da21-033e-4997-8064-f32422786723") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "7e182a65-87fc-444f-8def-959c17d2096a") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_line (start -2.82 0) (end -2.82 -2) (stroke (width 0.15) (type solid)) (layer "F.Fab") (uuid "6477381f-417b-4b1e-a033-819ce78333fd"))
        (fp_line (start 2.78 -2) (end -2.82 -2) (stroke (width 0.15) (type solid)) (layer "F.Fab") (uuid "93ceaccd-3be5-425e-92bf-9b6196be1ba1"))
        (fp_line (start 2.78 0) (end 2.78 -2) (stroke (width 0.15) (type solid)) (layer "F.Fab") (uuid "90dadc9a-1ecd-4906-b264-6fca8bef8d62"))
    `
    const front_mask = `
    `
    const front_courtyard = `
    `
    const front_paste = `
    `
    const pads = `
        (pad "" np_thru_hole circle (at -1.75 1.5 ${p.rot}) (size 1.2 1.2) (drill 1.2) (layers "*.Cu" "*.Mask" "F.SilkS") (uuid "82cc78f3-b373-41da-a0e4-077e7c2ab4f3"))
        (pad "" np_thru_hole circle (at -1.75 8.5 ${p.rot}) (size 1.2 1.2) (drill 1.2) (layers "*.Cu" "*.Mask" "F.SilkS") (uuid "4a8878a0-38ad-42b7-ab51-a2d697645b2a"))
        (pad "" np_thru_hole circle (at 0 1.5 ${p.rot}) (size 1.2 1.2) (drill 1.2) (layers "*.Cu" "*.Mask" "F.SilkS") (uuid "0978da03-fcc9-4961-83ff-0ffcff10b9eb"))
        (pad "" np_thru_hole circle (at 0 8.5 ${p.rot}) (size 1.2 1.2) (drill 1.2) (layers "*.Cu" "*.Mask" "F.SilkS") (uuid "477351e4-b36a-4f52-b55e-975b4464e6a6"))
        (pad "A" thru_hole oval (at -2.1 11.8 ${p.rot}) (size 1.7 2.5) (drill oval 1 1.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (clearance 0.15) (uuid "b13d6cb7-4ab1-4392-9b1a-c956449cdd2b") ${p.A})
        (pad "A" thru_hole oval (at 0.35 11.8 ${p.rot}) (size 1.7 2.5) (drill oval 1 1.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (clearance 0.15) (uuid "8e07d908-d7dd-4bdd-b2fe-b17d37b57edb") ${p.A})
        (pad "B" thru_hole oval (at -3.85 3.3 ${p.rot}) (size 1.7 2.5) (drill oval 1 1.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "275a3c41-ba39-4c78-b7eb-d28f7d947827") ${p.B})
        (pad "B" thru_hole oval (at 2.1 3.3 ${p.rot}) (size 1.7 2.5) (drill oval 1 1.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "3911733f-2996-4bea-8d41-cd50c3008c2e") ${p.B})
        (pad "C" thru_hole oval (at -3.85 6.3 ${p.rot}) (size 1.7 2.5) (drill oval 1 1.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "c998b18e-5d50-4df8-a108-db51a613f2bc") ${p.C})
        (pad "C" thru_hole oval (at 2.1 6.3 ${p.rot}) (size 1.7 2.5) (drill oval 1 1.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "110aa47c-a859-438c-8bc6-ced21e7a9746") ${p.C})
        (pad "D" thru_hole oval (at -3.85 10.3 ${p.rot}) (size 1.7 2.5) (drill oval 1 1.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (clearance 0.15) (uuid "5ed54c93-4fa3-4f24-b8c5-4d098e420279") ${p.D})
        (pad "D" thru_hole oval (at 2.1 10.3 ${p.rot}) (size 1.7 2.5) (drill oval 1 1.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (clearance 0.15) (uuid "671f1509-6c69-40af-bb8d-b95323d5c30b") ${p.D})
    `
    const back_silkscreen = `
        (fp_line (start -4.75 0) (end 1.25 0) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "b2c87f52-5d9b-4f87-91bc-b0518c170422"))
        (fp_line (start -4.75 12) (end -4.75 0) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "99210d47-52c9-43d3-a6d9-e7a053e321be"))
        (fp_line (start 1.25 0) (end 1.25 12) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "37b65aba-e8d5-4efc-bf58-acba7716c896"))
        (fp_line (start 1.25 12) (end -4.75 12) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "c6ccc080-6fc3-4732-8499-87b8da5520f4"))
        (fp_text user "TRRS" (at -0.8255 6.4135 ${0 + p.rot}) (layer "B.SilkS") (hide yes) (uuid "647693fd-7bc9-42e1-a83a-a15a93ac2fc2") (effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
    `
    const back_pads = `
    `
    const back_fabrication = `
        (fp_line (start -4.51 -2) (end 1.09 -2) (stroke (width 0.15) (type solid)) (layer "B.Fab") (uuid "773c629a-57ce-4777-a9b9-eaae4f93009c"))
        (fp_line (start -4.51 0) (end -4.51 -2) (stroke (width 0.15) (type solid)) (layer "B.Fab") (uuid "017929e8-27de-4d6d-9ae6-330dd77ca888"))
        (fp_line (start 1.09 0) (end 1.09 -2) (stroke (width 0.15) (type solid)) (layer "B.Fab") (uuid "def607c4-ce04-41d3-8903-e7bad45407e4"))
    `
    const back_mask = `
    `
    const back_courtyard = `
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
    const front_model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/PJ-320A.wrl" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
    `
    const back_model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/PJ-320A.wrl" (offset (xyz -1.8 0 -1.6)) (scale (xyz 1 1 1)) (rotate (xyz 0 180 0)))
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
        if (p.side == "F") {
            final += front_model;
        } else {
            final += back_model;
        } 
    }

    final += standard_closing;

    return final
  }
}
