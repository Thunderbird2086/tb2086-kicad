module.exports = {
  params: {
    designator: 'D',    // change it accordingly
    side: 'F',          // delete if not needed
    show_3d: false,
    from: {type: 'net', value: undefined}, // change to undefined as needed
    to: {type: 'net', value: undefined}, // change to undefined as needed
  },
  body: p => {
    let fp_name="TB2086_SMD:D3_SMD_tht";
    if (p.reversible) {
        fp_name += "_rev";
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20241229)
        (generator "pcbnew")
        (generator_version "9.0")
        (layer "${p.side}.Cu")
        (descr "Resitance 3 pas")
        (tags "R")
        (property "Reference" "${p.ref}" (at 0.5 0 ${0 + p.rot}) (layer "${p.side}.SilkS") ${p.ref_hide}  (effects (font (size 0.5 0.5) (thickness 0.125))))
        (attr through_hole)
        (embedded_fonts no)
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
        (fp_line (start -1.775 0) (end -3.81 0) (stroke (width 0.2) (type default)) (layer "F.Cu") )
        (fp_line (start 1.775 0) (end 3.81 0) (stroke (width 0.2) (type default)) (layer "F.Cu") )
        (pad "1" smd rect (at -1.775 0 ${p.rot}) (size 1.3 0.95) (layers "F.Cu" "F.Mask" "F.Paste")  ${p.P1})
        (pad "2" smd rect (at 1.775 0 ${p.rot}) (size 1.3 0.95) (layers "F.Cu" "F.Mask" "F.Paste")  ${p.P2})
    `
    const front_fabrication = `
        (property "Value" "${fp_name}" (at -0.6 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 0.5 0.5) (thickness 0.125))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_line (start 3.81 0) (end 2 0) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -4.86 -1.25) (end -4.86 1.25) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -4.86 1.25) (end 4.86 1.25) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 4.86 -1.25) (end -4.86 -1.25) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 4.86 1.25) (end 4.86 -1.25) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
    `
    const front_paste = `
    `
    const pads = `
        (pad "1" thru_hole rect (at -3.81 0 ${p.rot}) (size 1.6 1.6) (drill 0.8) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P1})
        (pad "2" thru_hole oval (at 3.81 0 ${p.rot}) (size 1.6 1.6) (drill 0.8) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P2})
    `
    const back_silkscreen = `
    `
    const back_pads = `
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
    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/D_1206_3216Metric.step" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
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

    if (p.show_3d) {
        final += model;
    }

    final += standard_closing;

    return final
  }
}
