module.exports = {
  params: {
    designator: 'D',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,
    from: {type: 'net', value: undefined}, // change to undefined as needed
    to: {type: 'net', value: undefined}, // change to undefined as needed
  },
  body: p => {
    let fp_name="D3_SMD";
    if (p.reversible) {
        fp_name += "_rev";
    }

    const standard_opening = `(
         footprint "TB2086_SMD:${fp_name}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (descr "Resitance 3 pas")
        (tags "R")
        (attr through_hole)
        (property "Reference" "${p.ref}" (at 0.5 0 ${0 + p.rot}) (layer "${p.side}.SilkS") (hide yes)  (effects (font (size 0.5 0.5) (thickness 0.125))))
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_line (start -2.7 -0.75) (end -2.7 0.75) (stroke (width 0.15) (type solid)) (layer "F.SilkS") )
        (fp_line (start -2.7 0.75) (end 2.7 0.75) (stroke (width 0.15) (type solid)) (layer "F.SilkS") )
        (fp_line (start -0.5 -0.5) (end -0.5 0.5) (stroke (width 0.15) (type solid)) (layer "F.SilkS") )
        (fp_line (start -0.4 0) (end 0.5 -0.5) (stroke (width 0.15) (type solid)) (layer "F.SilkS") )
        (fp_line (start 0.5 -0.5) (end 0.5 0.5) (stroke (width 0.15) (type solid)) (layer "F.SilkS") )
        (fp_line (start 0.5 0.5) (end -0.4 0) (stroke (width 0.15) (type solid)) (layer "F.SilkS") )
        (fp_line (start 2.7 -0.75) (end -2.7 -0.75) (stroke (width 0.15) (type solid)) (layer "F.SilkS") )
        (fp_line (start 2.7 -0.75) (end 2.7 0.75) (stroke (width 0.15) (type solid)) (layer "F.SilkS") )
    `
    const front_pads = `
        (pad "1" smd rect (at -1.775 0 ${p.rot}) (size 1.3 0.95) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.to})
        (pad "1" smd rect (at -1.2 0 ${p.rot}) (size 0.6 0.4) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.to})
        (pad "2" smd rect (at 1.2 0 ${p.rot}) (size 0.6 0.4) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.from})
        (pad "2" smd rect (at 1.775 0 ${p.rot}) (size 1.3 0.95) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.from})
    `
    const front_fabrication = `
        (property "Value" "${fp_name}" (at -0.6 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 0.5 0.5) (thickness 0.125))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
    `
    const front_paste = `
    `
    const pads = `
        (pad "1" thru_hole circle (at -0.889 0 ${p.rot}) (size 0.5 0.5) (drill 0.3) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.to})
        (pad "2" thru_hole circle (at 0.889 0 ${p.rot}) (size 0.5 0.5) (drill 0.3) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.from})
    `
    const back_silkscreen = `
        (fp_line (start -2.7 -0.75) (end -2.7 0.75) (stroke (width 0.15) (type solid)) (layer "B.SilkS") )
        (fp_line (start -2.7 0.75) (end 2.7 0.75) (stroke (width 0.15) (type solid)) (layer "B.SilkS") )
        (fp_line (start -0.5 -0.5) (end -0.5 0.5) (stroke (width 0.15) (type solid)) (layer "B.SilkS") )
        (fp_line (start -0.4 0) (end 0.5 -0.5) (stroke (width 0.15) (type solid)) (layer "B.SilkS") )
        (fp_line (start 0.5 -0.5) (end 0.5 0.5) (stroke (width 0.15) (type solid)) (layer "B.SilkS") )
        (fp_line (start 0.5 0.5) (end -0.4 0) (stroke (width 0.15) (type solid)) (layer "B.SilkS") )
        (fp_line (start 2.7 -0.75) (end -2.7 -0.75) (stroke (width 0.15) (type solid)) (layer "B.SilkS") )
        (fp_line (start 2.7 0.75) (end 2.7 -0.75) (stroke (width 0.15) (type solid)) (layer "B.SilkS") )
    `
    const back_pads = `
        (pad "1" smd rect (at -1.775 0 ${p.rot}) (size 1.3 0.95) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.to})
        (pad "1" smd rect (at -1.2 0 ${p.rot}) (size 0.6 0.4) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.to})
        (pad "2" smd rect (at 1.2 0 ${p.rot}) (size 0.6 0.4) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.from})
        (pad "2" smd rect (at 1.775 0 ${p.rot}) (size 1.3 0.95) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.from})
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
        rotate = "(xyz 180 0 0)"
    }

    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/D_1206_3216Metric.wrl" (offset ${offset}) (scale (xyz 1 1 1)) (rotate ${rotate}))
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
