module.exports = {
  params: {
    designator: 'LED',
    side: 'F',
    reversible: false,
    show_3d: false,
    from: {type: 'net', value: undefined},
    to: {type: 'net', value: undefined},
  },
  body: p => {
    let fp_name="TB2086_LED:LED_0603_1608Metric_Pad1.05x0.95mm_HandSolder";
    if (p.reversible) {
        fp_name = fp_name + "_rev";
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "${p.side}.Cu")
        (descr "LED SMD 0603 (1608 Metric), square (rectangular) end terminal, IPC_7351 nominal, (Body size source: http://www.tortai-tech.com/upload/download/2011102023233369053.pdf), generated with kicad-footprint-generator")
        (tags "LED handsolder")
        (property "Reference" "${p.ref}" (at 0 -1.43 ${0 + p.rot}) (layer "${p.side}.SilkS") ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_line (start -1.66 -0.735) (end -1.66 0.735) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -1.66 0.735) (end 0.8 0.735) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start 0.8 -0.735) (end -1.66 -0.735) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
    `
    const front_pads = `
        (pad "1" smd roundrect (at -0.875 0 ${p.rot}) (size 1.05 0.95) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25)  ${p.to})
        (pad "2" smd roundrect (at 0.875 0 ${p.rot}) (size 1.05 0.95) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25)  ${p.from})
    `
    const front_fabrication = `
        (property "Value" "${fp_name}" (at 0 1.43 ${0 + p.rot}) (layer "F.Fab") (uuid "9e7adbb5-13d4-4208-9aaa-340a7a487639") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_line (start -0.8 -0.1) (end -0.8 0.4) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -0.8 0.4) (end 0.8 0.4) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -0.5 -0.4) (end -0.8 -0.1) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 0.8 -0.4) (end -0.5 -0.4) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 0.8 0.4) (end 0.8 -0.4) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_text user "${p.ref}" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (effects (font (size 0.4 0.4) (thickness 0.06))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -1.65 -0.73) (end 1.65 -0.73) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -1.65 0.73) (end -1.65 -0.73) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 1.65 -0.73) (end 1.65 0.73) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 1.65 0.73) (end -1.65 0.73) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
    `
    const front_paste = `
    `
    const pads = `
    `
    const back_silkscreen = `
        (fp_line (start -0.8 -0.735) (end 1.66 -0.735) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 1.66 -0.735) (end 1.66 0.735) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 1.66 0.735) (end -0.8 0.735) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
    `
    const back_pads = `
        (pad "1" smd roundrect (at 0.875 0 ${p.rot}) (size 1.05 0.95) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)  ${p.to})
        (pad "2" smd roundrect (at -0.875 0 ${p.rot}) (size 1.05 0.95) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)  ${p.from})
    `
    const back_fabrication = `
        (fp_line (start -0.8 -0.4) (end 0.5 -0.4) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start -0.8 0.4) (end -0.8 -0.4) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 0.5 -0.4) (end 0.8 -0.1) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 0.8 -0.1) (end 0.8 0.4) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 0.8 0.4) (end -0.8 0.4) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
    `
    const back_mask = `
    `
    const back_courtyard = `
        (fp_line (start -1.65 -0.73) (end -1.65 0.73) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -1.65 0.73) (end 1.65 0.73) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 1.65 -0.73) (end -1.65 -0.73) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 1.65 0.73) (end 1.65 -0.73) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
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
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/LED_0603_1608Metric.step" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
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
