module.exports = {
  params: {
    designator: 'D',
    side: 'F',
    show_3d: false,
    from: {type: 'net', value: 'from'},
    to: {type: 'net', value: 'to'},
  },
  body: p => {
    const fp_name="TB2086_SMD:D_0805_2012Metric_Pad1.15x1.40mm_HandSolder_THT";
    const standard_opening = `(
         footprint "${fp_name}"
        (version 20241229)
        (generator "pcbnew")
        (generator_version "9.0")
        (layer "${p.side}.Cu")
        (descr "Diode SMD 0805 (2012 Metric), square (rectangular) end terminal, IPC_7351 nominal, (Body size source: https://docs.google.com/spreadsheets/d/1BsfQQcO9C6DZCsRaXUlFlo91Tg2WpOkGARC1WS5S8t0/edit?usp=sharing), generated with kicad-footprint-generator")
        (tags "diode handsolder")
        (property "Reference" "${p.ref}" (at 0 -1.65 ${0 + p.rot}) (layer "${p.side}.SilkS") ${p.ref_hide}  (effects (font (size 1 1) (thickness 0.15))))
        (attr smd)
        (embedded_fonts no)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_line (start -1.86 -0.96) (end -1.86 0.96) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -1.86 0.96) (end 1 0.96) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start 1 -0.96) (end -1.86 -0.96) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
    `
    const front_pads = `
        (fp_line (start -1.025 0) (end -3.81 0) (stroke (width 0.2) (type default)) (layer "F.Cu") )
        (fp_line (start 1.025 0) (end 3.81 0) (stroke (width 0.2) (type solid)) (layer "F.Cu") )
        (pad "1" smd roundrect (at -1.025 0 ${p.rot}) (size 1.15 1.4) (layers "F.Cu" "F.Mask" "F.Paste") (roundrect_rratio 0.217391)  ${p.to})
        (pad "2" smd roundrect (at 1.025 0 ${p.rot}) (size 1.15 1.4) (layers "F.Cu" "F.Mask" "F.Paste") (roundrect_rratio 0.217391)  ${p.from})
    `
    const front_fabrication = `
        (property "Value" "${fp_name}" (at 0 1.65 ${0 + p.rot}) (layer "F.Fab")  (effects (font (size 1 1) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_line (start -3.81 0) (end -2 0) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -2 -1) (end -2 1) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -2 1) (end 2 1) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -1.5 -1) (end -1.5 1) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -1.4 -1) (end -1.4 1) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -1.3 -1) (end -1.3 1) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -1 -0.3) (end -1 0.6) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -1 0.6) (end 1 0.6) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -0.7 -0.6) (end -1 -0.3) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 1 -0.6) (end -0.7 -0.6) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 1 0.6) (end 1 -0.6) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 2 -1) (end -2 -1) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 2 1) (end 2 -1) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 3.81 0) (end 2 0) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_text user "${p.ref}" (at 0 0 ${0 + p.rot}) (layer "F.Fab")  (effects (font (size 0.5 0.5) (thickness 0.08))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -4.86 -1.25) (end -4.86 1.25) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -4.86 1.25) (end 4.86 1.25) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -1.85 -0.95) (end 1.85 -0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -1.85 0.95) (end -1.85 -0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 1.85 -0.95) (end 1.85 0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 1.85 0.95) (end -1.85 0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 4.86 -1.25) (end -4.86 -1.25) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 4.86 1.25) (end 4.86 -1.25) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
    `
    const front_paste = `
    `
    const pads = `
        (pad "1" thru_hole rect (at -3.81 0 ${p.rot}) (size 1.6 1.6) (drill 0.8) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.to})
        (pad "2" thru_hole oval (at 3.81 0 ${p.rot}) (size 1.6 1.6) (drill 0.8) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.from})
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
        (model "\${KICAD8_3DMODEL_DIR}/Diode_SMD.3dshapes/D_0805_2012Metric.wrl" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
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
    final += model;
    final += standard_closing;

    return final
  }
}
