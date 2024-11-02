module.exports = {
  params: {
    designator: 'C',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,
    P2: {type: 'net', value: undefined}, // change to undefined as needed
    P1: {type: 'net', value: undefined}, // change to undefined as needed
  },
  body: p => {
    const standard_opening = `(
         footprint "C_0805_2012Metric_Pad1.20x1.40mm_HandSolder_rev"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (tags "capacitor handsolder")
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (property "Reference" "${p.ref}" (at 0 -1.65 ${0 + p.rot}) (layer "F.SilkS") (hide yes) (uuid "ea8a26ea-3a6d-4dab-baac-2b7813101d69") (effects (font (size 1 1) (thickness 0.15))))
        (fp_line (start -0.227064 -0.735) (end 0.227064 -0.735) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "48271d98-12d9-4f33-af9f-2d7831085097"))
        (fp_line (start -0.227064 0.735) (end 0.227064 0.735) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "d034902c-e5b7-4c79-bf4e-2234fd7562ae"))
    `
    const front_pads = `
        (pad "1" smd roundrect (at -1 0 ${p.rot}) (size 1.2 1.4) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.208333) (uuid "4937d829-fe33-4310-b24e-1c4f5b5702fa") ${p.P1})
        (pad "2" smd roundrect (at 1 0 ${p.rot}) (size 1.2 1.4) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.208333) (uuid "1bdfed4a-fb38-4162-b692-6c86bd617303") ${p.P2})
    `
    const front_fabrication = `
        (property "Value" "C_0805_2012Metric_Pad1.20x1.40mm_HandSolder_rev" (at 0 1.65 ${0 + p.rot}) (layer "F.Fab") (uuid "6264eead-45d6-41c5-8b9f-173ccc59d3cf") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "e29b08d0-b671-47b8-b47f-c944be4ff4f5") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "4ebef76d-0f78-43cb-bcab-d8c6ef2eeb74") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "fcd36899-0e75-4ea9-8e57-25267bc86013") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_line (start -1 -0.625) (end 1 -0.625) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "f97d0d99-13fa-4988-85ec-df5e924cab3a"))
        (fp_line (start -1 0.625) (end -1 -0.625) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "8a128ae7-eb37-424e-8c0e-2536ba19e311"))
        (fp_line (start 1 -0.625) (end 1 0.625) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "a7969011-0845-48e1-9690-b137beca65d7"))
        (fp_line (start 1 0.625) (end -1 0.625) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "fe9d62b8-c669-40f7-9f74-a73c83a94bab"))
        (fp_text user "${p.ref}" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (uuid "2a12e1fe-6583-480f-b520-69f04005c491") (effects (font (size 0.5 0.5) (thickness 0.08))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -1.85 -0.95) (end 1.85 -0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "2682e825-0d85-467f-aecf-eb3fab925831"))
        (fp_line (start -1.85 0.95) (end -1.85 -0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "bb3b7d94-9d6d-4731-99fd-aafb11e8ce69"))
        (fp_line (start 1.85 -0.95) (end 1.85 0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "fa83aaae-a6ae-4d28-9a0c-5c24aa106cda"))
        (fp_line (start 1.85 0.95) (end -1.85 0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "49a5eb84-1cdf-4972-a826-169f72a58314"))
    `
    const front_paste = `
    `
    const pads = `
        (descr "Resistor SMD 0805 (2012 Metric), square (rectangular) end terminal, IPC_7351 nominal with elongated pad for handsoldering. (Body size source: IPC-SM-782 page 72, https://www.pcb-3d.com/wordpress/wp-content/uploads/ipc-sm-782a_amendment_1_and_2.pdf), generated with kicad-footprint-generator")
    `
    const back_silkscreen = `
        (fp_line (start -0.227064 -0.735) (end 0.227064 -0.735) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "3a8895b6-a1b9-431c-a8a9-cd38977e3396"))
        (fp_line (start -0.227064 0.735) (end 0.227064 0.735) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "16b30b70-08b0-4df3-a3bd-f10bacbcb189"))
    `
    const back_pads = `
        (property "Reference" "${p.ref}" (at 0 -1.65 ${180 + p.rot}) (layer "B.SilkS") (hide yes) (uuid "ea8a26ea-3a6d-4dab-baac-2b7813101d69") (effects (font (size 1 1) (thickness 0.15))))
        (pad "1" smd roundrect (at -1 0 ${180 + p.rot}) (size 1.2 1.4) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.208333) (uuid "a8dfb015-9e15-4834-8e95-f9d6591eb820") ${p.P1})
        (pad "2" smd roundrect (at 1 0 ${180 + p.rot}) (size 1.2 1.4) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.208333) (uuid "80533845-5781-46cd-a5d3-f7fb58976153") ${p.P2})
    `
    const back_fabrication = `
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

    let offset = "(xyz 0 0 0)"
    let rotate = "(xyz 0 0 0)"
    if (p.side == "B") {
        offset = "(xyz 0 0 -1.6)"
        rotate = "(xyz 0 180 0)"
    }

    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/R_0805_2012Metric.step" (offset ${offset}) (scale (xyz 1 1 1)) (rotate ${rotate}))
    `
    const standard_closing = `
            )

    `
    let final = standard_opening;
    final += pads;
    if (p.reversible || p.side == "F") {
       final += front_silkscreen;
       final += front_pads;
       final += front_fabrication;
       final += front_mask;
       final += front_courtyard;
       final += front_paste;
    }

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
