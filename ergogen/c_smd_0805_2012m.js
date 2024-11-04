module.exports = {
  params: {
    designator: 'C',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,
    P1: {type: 'net', value: undefined}, // change to undefined as needed
    P2: {type: 'net', value: undefined}, // change to undefined as needed
  },
  body: p => {
    let fp_name="C_0805_2012Metric_Pad1.18x1.45mm_HandSolder";
    if (p.reversible) {
        fp_name = "TB2086_SMD:" + ${fp_name} + "_rev";
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (tags "capacitor handsolder")
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (property "Reference" "${p.ref}" (at 0 -1.68 ${0 + p.rot}) (layer "F.SilkS") (uuid "79648a8a-db92-4d15-88fe-c63b15560e19") (effects (font (size 1 1) (thickness 0.15))))
        (fp_line (start -0.261252 -0.735) (end 0.261252 -0.735) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "a3617ca4-f5db-44c3-9130-94b385c7e338"))
        (fp_line (start -0.261252 0.735) (end 0.261252 0.735) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "cb3d87f1-61a6-4f8a-bd8b-6cf6e1fafe83"))
    `
    const front_pads = `
        (pad "1" smd roundrect (at -1.0375 0 ${p.rot}) (size 1.175 1.45) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.212766) (uuid "5c952ec8-c980-4a94-a972-30f730128869") ${p.P1})
        (pad "2" smd roundrect (at 1.0375 0 ${p.rot}) (size 1.175 1.45) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.212766) (uuid "26b8f07a-78fd-4334-a627-c22ac9be221b") ${p.P2})
    `
    const front_fabrication = `
        (property "Value" "${fp_name}" (at 0 1.68 ${0 + p.rot}) (layer "F.Fab") (uuid "2faa6533-bd7f-4045-b3e8-f0563d8bdcb0") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "79815203-23b0-47aa-bcdc-d039fef07bb8") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "264a249e-86b6-49ab-bc67-944dc30fc0ae") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "a611208d-250a-42ef-b7fa-e6f9e47411ee") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_line (start -1 -0.625) (end 1 -0.625) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "462dcbaa-110b-4c22-b113-3e85baeea0e0"))
        (fp_line (start -1 0.625) (end -1 -0.625) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "c27546ee-1d07-4d96-bdd5-078fe9468528"))
        (fp_line (start 1 -0.625) (end 1 0.625) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "7c9750b1-41ff-4bba-a611-82cfc4e49440"))
        (fp_line (start 1 0.625) (end -1 0.625) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "bfbad6ed-9bbd-4a1a-bdfe-ee50245a621a"))
        (fp_text user "${p.ref}" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (uuid "2aa51584-7f2e-4a4a-b57d-bfb466824e30") (effects (font (size 0.5 0.5) (thickness 0.08))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -1.88 -0.98) (end 1.88 -0.98) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "f6be3644-2a54-4fbf-bf15-5b6eed6d8a56"))
        (fp_line (start -1.88 0.98) (end -1.88 -0.98) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "c529675f-a8ed-44d1-80ae-ea250a6903d7"))
        (fp_line (start 1.88 -0.98) (end 1.88 0.98) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "54dff31b-cb37-4ff9-b6c6-2a622ddda3ef"))
        (fp_line (start 1.88 0.98) (end -1.88 0.98) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "48d7958a-7eb3-477d-82cc-d56aca09968e"))
    `
    const front_paste = `
    `
    const pads = `
        (descr "Capacitor SMD 0805 (2012 Metric), square (rectangular) end terminal, IPC_7351 nominal with elongated pad for handsoldering. (Body size source: IPC-SM-782 page 76, https://www.pcb-3d.com/wordpress/wp-content/uploads/ipc-sm-782a_amendment_1_and_2.pdf, https://docs.google.com/spreadsheets/d/1BsfQQcO9C6DZCsRaXUlFlo91Tg2WpOkGARC1WS5S8t0/edit?usp=sharing), generated with kicad-footprint-generator")
    `
    const back_silkscreen = `
        (fp_line (start 0.261252 -0.735) (end -0.261252 -0.735) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "c02c5782-1520-487b-a2f3-37b45df816e0"))
        (fp_line (start 0.261252 0.735) (end -0.261252 0.735) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "d66402db-8a4f-4d49-9ebb-95ce35153779"))
    `
    const back_pads = `
        (pad "1" smd roundrect (at -1.0375 0 ${p.rot}) (size 1.175 1.45) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.212766) (uuid "da966d1e-b61c-4bac-83f8-149d6bb9b80b") ${p.P1})
        (pad "2" smd roundrect (at 1.0375 0 ${p.rot}) (size 1.175 1.45) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.212766) (uuid "90ea6aef-4ef2-4eb5-9ad8-e84fdd08e9f3") ${p.P2})
    `
    const back_fabrication = `
    `
    const back_mask = `
    `
    const back_courtyard = `
        (fp_line (start -1.88 -0.98) (end -1.88 0.98) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "34a0ffc6-5552-4fd4-8cca-f84f50311cea"))
        (fp_line (start -1.88 0.98) (end 1.88 0.98) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "950ba494-ae29-4889-a7cd-50bd8c637dc0"))
        (fp_line (start 1.88 -0.98) (end -1.88 -0.98) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "f08b80f0-7d35-4a3e-a673-161ca78895bb"))
        (fp_line (start 1.88 0.98) (end 1.88 -0.98) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "a0ab1d90-7df8-4038-97ee-9aaaed6bb367"))
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

    let offset = "(xyz 0 0 0)"
    let rotate = "(xyz 0 0 0)"
    if (p.side == "B") {
        offset = "(xyz 0 0 -1.6)"
        rotate = "(xyz 0 180 0)"
    }

    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/C_0805_2012Metric.step" (offset ${offset}) (scale (xyz 1 1 1)) (rotate ${rotate}))
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
