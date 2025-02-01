module.exports = {
  params: {
    designator: 'L',
    side: 'B',
    reversible: false,
    show_3d: false,
    from: {type: 'net', value: undefined},
    to: {type: 'net', value: undefined},
    VCC: {type: 'net', value: 'VCC'},
    GND: {type: 'net', value: 'GND'},
  },
  body: p => {
    let fp_name="TB2086_LED:LED_SK6812MINI-E";
    if (p.reversible) {
        fp_name += "_rev";
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20221018)
        (generator pcbnew)
        (layer "F.Cu")
        (attr through_hole)
        (fp_text value "${fp_name}" (at 0 -0.5 ${p.rot}) (layer "${p.side}.SilkS") ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))) (tstamp ee132152-743b-421a-941a-dcd0b807fc0f))
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_line (start 3.9 -1.325) (end 3.9 -0.425) (stroke (width 0.12) (type default)) (layer "F.SilkS") )
    `
    const front_pads = `
        (pad "1" smd rect (at -2.75 0.85 ${p.rot}) (size 1.9 0.82) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.VCC})
        (pad "1" smd rect (at -2.2 0.4 ${p.rot}) (size 0.5 0.82) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.VCC})
        (pad "2" smd rect (at -3.075 -0.4 ${p.rot}) (size 0.25 0.82) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.to})
        (pad "2" smd rect (at -2.75 -0.85 ${p.rot}) (size 1.9 0.82) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.to})
        (pad "3" smd rect (at 2.2 -0.4 ${p.rot}) (size 0.5 0.82) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.GND})
        (pad "3" smd roundrect (at 2.75 -0.85 ${p.rot}) (size 1.9 0.82) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0) (chamfer_ratio 0.5) (chamfer top_right)  ${p.GND})
        (pad "4" smd rect (at 2.75 0.85 ${p.rot}) (size 1.9 0.82) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.from})
        (pad "4" smd rect (at 3.075 0.4 ${p.rot}) (size 0.25 0.82) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.from})
    `
    const front_fabrication = `
    `
    const front_mask = `
    `
    const front_courtyard = `
    `
    const front_paste = `
    `
    const pads = `
        (pad "1" thru_hole circle (at -2.2 0 ${p.rot}) (size 0.4 0.4) (drill 0.3) (layers "*.Cu" "*.Mask")  ${p.VCC})
        (pad "2" thru_hole circle (at -3.075 0 ${p.rot}) (size 0.4 0.4) (drill 0.3) (layers "*.Cu" "*.Mask")  ${p.to})
        (pad "3" thru_hole circle (at 2.2 0 ${p.rot}) (size 0.4 0.4) (drill 0.3) (layers "*.Cu" "*.Mask")  ${p.GND})
        (pad "4" thru_hole circle (at 3.075 0 ${p.rot}) (size 0.4 0.4) (drill 0.3) (layers "*.Cu" "*.Mask")  ${p.from})
    `
    const back_silkscreen = `
        (fp_line (start 3.9 0.4) (end 3.9 1.3) (stroke (width 0.12) (type default)) (layer "B.SilkS") )
    `
    const back_pads = `
        (pad "1" smd rect (at -2.75 -0.85 ${p.rot}) (size 1.9 0.82) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.VCC})
        (pad "1" smd rect (at -2.2 -0.4 ${p.rot}) (size 0.5 0.82) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.VCC})
        (pad "2" smd rect (at -3.075 0.4 ${p.rot}) (size 0.25 0.82) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.to})
        (pad "2" smd rect (at -2.75 0.85 ${p.rot}) (size 1.9 0.82) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.to})
        (pad "3" smd rect (at 2.2 0.4 ${p.rot}) (size 0.5 0.82) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.GND})
        (pad "3" smd roundrect (at 2.75 0.85 ${p.rot}) (size 1.9 0.82) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0) (chamfer_ratio 0.5) (chamfer bottom_right)  ${p.GND})
        (pad "4" smd rect (at 2.75 -0.85 ${p.rot}) (size 1.9 0.82) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.from})
        (pad "4" smd rect (at 3.075 -0.4 ${p.rot}) (size 0.25 0.82) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.from})
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
        (fp_line (start -1.7 -1.5) (end 1.7 -1.5) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )
        (fp_line (start -1.7 1.5) (end -1.7 -1.5) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )
        (fp_line (start 1.7 -1.5) (end 1.7 1.5) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )
        (fp_line (start 1.7 1.5) (end -1.7 1.5) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )
    `
    const user_drawing = `
    `
    const user_comments = `
        (fp_line (start -1.6 -1.4) (end 1.6 -1.4) (stroke (width 0.12) (type solid)) (layer "Cmts.User") )
        (fp_line (start -1.6 1.4) (end -1.6 -1.4) (stroke (width 0.12) (type solid)) (layer "Cmts.User") )
        (fp_line (start 1.6 -1.4) (end 1.6 1.4) (stroke (width 0.12) (type solid)) (layer "Cmts.User") )
        (fp_line (start 1.6 1.4) (end -1.6 1.4) (stroke (width 0.12) (type solid)) (layer "Cmts.User") )
    `
    const user_eco1 = `
        (fp_text reference "${p.ref}" (at 0 2.1 ${p.rot}) (layer "Eco1.User") (effects (font (size 0.7 0.7) (thickness 0.15))) )
    `
    const user_eco2 = `
    `

    let offset = "(xyz 0 0 -1.8)"
    let rotate = "(xyz 0 0 0)"
    if (p.side == "F") {
        offset = "(xyz 0 0 0.2)"
        rotate = "(xyz 0 180 0)"
    }

    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/SK6812MINI-E.wrl" (offset ${offset}) (scale (xyz 1 1 1)) (rotate ${rotate}))
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

    if (p.reversible) {
        final += pads;
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
