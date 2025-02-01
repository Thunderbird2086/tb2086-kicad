module.exports = {
  params: {
    designator: 'R',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,
    P1: {type: 'net', value: undefined}, // change to undefined as needed
    P2: {type: 'net', value: undefined}, // change to undefined as needed
  },
  body: p => {
    let fp_name="TB2086_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder"
    if (p.reversible) {
        fp_name += "_rev";
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (tags "resistor handsolder")
        (property "Reference" "${p.ref}" (at 0 -1.65 ${0 + p.rot}) (layer "${p.side}.SilkS") ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_line (start -0.227064 -0.735) (end 0.227064 -0.735) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -0.227064 0.735) (end 0.227064 0.735) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
    `
    const front_pads = `
        (pad "1" smd roundrect (at -1 0 ${p.rot}) (size 1.2 1.4) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.208333)  ${p.P1})
        (pad "2" smd roundrect (at 1 0 ${p.rot}) (size 1.2 1.4) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.208333)  ${p.P2})
    `
    const front_fabrication = `
        (property "Value" "${fp_name}" (at 0 1.65 ${0 + p.rot}) (layer "F.Fab") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_line (start -1 -0.625) (end 1 -0.625) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -1 0.625) (end -1 -0.625) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 1 -0.625) (end 1 0.625) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 1 0.625) (end -1 0.625) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_text user "${p.ref}" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (effects (font (size 0.5 0.5) (thickness 0.08))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -1.85 -0.95) (end 1.85 -0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -1.85 0.95) (end -1.85 -0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 1.85 -0.95) (end 1.85 0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 1.85 0.95) (end -1.85 0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
    `
    const front_paste = `
    `
    const pads = `
        (descr "Resistor SMD 0805 (2012 Metric), square (rectangular) end terminal, IPC_7351 nominal with elongated pad for handsoldering. (Body size source: IPC-SM-782 page 72, https://www.pcb-3d.com/wordpress/wp-content/uploads/ipc-sm-782a_amendment_1_and_2.pdf), generated with kicad-footprint-generator")
    `
    const back_silkscreen = `
        (fp_line (start -0.227064 -0.735) (end 0.227064 -0.735) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start -0.227064 0.735) (end 0.227064 0.735) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
    `
    const back_pads = `
        (pad "1" smd roundrect (at -1 0 ${180 + p.rot}) (size 1.2 1.4) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.208333)  ${p.P1})
        (pad "2" smd roundrect (at 1 0 ${180 + p.rot}) (size 1.2 1.4) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.208333)  ${p.P2})
    `
    const back_fabrication = `
    `
    const back_mask = `
    `
    const back_courtyard = `
        (fp_line (start -1.85 -0.95) (end -1.85 0.95) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -1.85 0.95) (end 1.85 0.95) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 1.85 -0.95) (end -1.85 -0.95) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 1.85 0.95) (end 1.85 -0.95) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
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
