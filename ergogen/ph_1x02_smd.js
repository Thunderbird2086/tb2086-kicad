module.exports = {
  params: {
    designator: 'J',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,     // delete if not needed
    MP: {type: 'net', value: 'MP'}, // undefined}, // change to undefined as needed
    P2: {type: 'net', value: 'P2'}, // undefined}, // change to undefined as needed
    P1: {type: 'net', value: 'P1'}, // undefined}, // change to undefined as needed
  },
  body: p => {
    let fp_name="TB2086_SMD:JST_PH_S2B-PH-SM4-TB_1x02-1MP_P2.00mm_Horizontal"
    if (p.reversible) {
        fp_name += "_rev";
    }
    const standard_opening = `(
         footprint "${fp_name}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "${p.side}.Cu")
        (descr "JST PH series connector, S2B-PH-SM4-TB (http://www.jst-mfg.com/product/pdf/eng/ePH.pdf), generated with kicad-footprint-generator")
        (tags "connector JST PH horizontal")
        (property "Reference" "${p.ref}" (at 0 -5.8 ${0 + p.rot}) (layer "${p.side}.SilkS") ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_line (start -4.06 -3.31) (end -3.04 -3.31) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -4.06 0.94) (end -4.06 -3.31) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -3.04 -3.31) (end -3.04 -1.71) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -3.04 -1.71) (end -1.76 -1.71) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -2.34 4.51) (end 2.34 4.51) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -1.76 -1.71) (end -1.76 -4.6) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start 3.04 -3.31) (end 3.04 -1.71) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start 3.04 -1.71) (end 1.76 -1.71) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start 4.06 -3.31) (end 3.04 -3.31) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start 4.06 0.94) (end 4.06 -3.31) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_circle (center -2.35 -4.83) (end -2.25 -4.83) (stroke (width 0.3) (type solid)) (fill none) (layer "F.SilkS") )
    `
    const front_pads = `
        (pad "1" smd roundrect (at -1 -2.85 ${p.rot}) (size 1 3.5) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25)  ${p.P1})
        (pad "2" smd roundrect (at 1 -2.85 ${p.rot}) (size 1 3.5) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25)  ${p.P2})
        (pad "MP" smd roundrect (at -3.75 2.9 ${p.rot}) (size 2.5 3.4) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.166667)  ${p.MP})
        (pad "MP" smd roundrect (at 3.75 2.9 ${p.rot}) (size 2.5 3.4) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.166667)  ${p.MP})
    `
    const front_fabrication = `
        (property "Value" "${fp_name}" (at 0 5.8 ${0 + p.rot}) (layer "F.Fab")  (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_line (start -3.95 -3.2) (end -3.95 4.4) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -3.95 -3.2) (end -3.15 -3.2) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -3.95 4.4) (end 3.95 4.4) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -3.15 -3.2) (end -3.15 -1.6) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -3.15 -1.6) (end 3.15 -1.6) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -1.5 -1.6) (end -1 -0.892893) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -1 -0.892893) (end -0.5 -1.6) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 3.15 -3.2) (end 3.95 -3.2) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 3.15 -1.6) (end 3.15 -3.2) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 3.95 -3.2) (end 3.95 4.4) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_text user "\${REFERENCE}" (at 0 1.5 ${0 + p.rot}) (layer "F.Fab")  (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -5.1 -5.1) (end -5.1 5.1) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -5.1 5.1) (end 5.1 5.1) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 5.1 -5.1) (end -5.1 -5.1) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 5.1 5.1) (end 5.1 -5.1) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
    `
    const front_paste = `
    `
    const pads = `
    `
    const back_silkscreen = `
        (fp_line (start -4.06 -3.31) (end -3.04 -3.31) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start -4.06 0.94) (end -4.06 -3.31) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start -3.04 -3.31) (end -3.04 -1.71) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start -3.04 -1.71) (end -1.76 -1.71) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 1.76 -1.71) (end 1.76 -4.6) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 2.34 4.51) (end -2.34 4.51) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 3.04 -3.31) (end 3.04 -1.71) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 3.04 -1.71) (end 1.76 -1.71) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 4.06 -3.31) (end 3.04 -3.31) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 4.06 0.94) (end 4.06 -3.31) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_circle (center 2.35 -4.83) (end 2.25 -4.83) (stroke (width 0.3) (type solid)) (fill none) (layer "B.SilkS") )
    `
    const back_pads = `
        (pad "1" smd roundrect (at 1 -2.85 ${p.rot}) (size 1 3.5) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)  ${p.P1})
        (pad "2" smd roundrect (at -1 -2.85 ${p.rot}) (size 1 3.5) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)  ${p.P2})
        (pad "MP" smd roundrect (at -3.75 2.9 ${p.rot}) (size 2.5 3.4) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.166667)  ${p.MP})
        (pad "MP" smd roundrect (at 3.75 2.9 ${p.rot}) (size 2.5 3.4) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.166667)  ${p.MP})
    `
    const back_fabrication = `
        (fp_line (start -3.95 -3.2) (end -3.95 4.4) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start -3.15 -3.2) (end -3.95 -3.2) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start -3.15 -1.6) (end -3.15 -3.2) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 1 -0.892893) (end 0.5 -1.6) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 1.5 -1.6) (end 1 -0.892893) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 3.15 -3.2) (end 3.15 -1.6) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 3.15 -1.6) (end -3.15 -1.6) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 3.95 -3.2) (end 3.15 -3.2) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 3.95 -3.2) (end 3.95 4.4) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 3.95 4.4) (end -3.95 4.4) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
    `
    const back_mask = `
    `
    const back_courtyard = `
        (fp_line (start -5.1 -5.1) (end 5.1 -5.1) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -5.1 5.1) (end -5.1 -5.1) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 5.1 -5.1) (end 5.1 5.1) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 5.1 5.1) (end -5.1 5.1) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
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
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/S2B-PH-SM4-TB.step" (offset (xyz 0 -4.5 0)) (scale (xyz 1 1 1)) (rotate (xyz 90 180 180)))
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
