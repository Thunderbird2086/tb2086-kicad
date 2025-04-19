module.exports = {
  params: {
    designator: 'S',    // change it accordingly
    side: 'B',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,     // delete if not needed
    P2: {type: 'net', value: undefined}, // change to undefined as needed
    P1: {type: 'net', value: undefined}, // change to undefined as needed
  },
  body: p => {
    let fp_name = "TB2086_KEYSWITCH:SW_MX_HS_1.5u"

    if (p.reversible) {
        fp_name += "_reversible"
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (descr "Footprint for Cherry MX style switches with Kailh hotswap socket")
        (property "Reference" "${p.ref}" (at -4.4196 1.778 ${0 + p.rot}) (layer "${p.side}.SilkS") ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_line (start -4.864824 -6.75022) (end -4.864824 -6.52022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") )
        (fp_line (start -4.864824 -3.67022) (end -4.864824 -3.20022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") )
        (fp_line (start -4.364824 -2.70022) (end 0.2 -2.70022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") )
        (fp_line (start -3.314824 -6.75022) (end -4.864824 -6.75022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") )
        (fp_line (start 4.085176 -6.75022) (end -1.814824 -6.75022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") )
        (fp_line (start 6.085176 -3.95022) (end 6.085176 -4.75022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") )
        (fp_line (start 6.085176 -1.10022) (end 6.085176 -0.86022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") )
        (fp_arc (start -4.364824 -2.70022) (mid -4.718377 -2.846667) (end -4.864824 -3.20022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") )
        (fp_arc (start 0.2 -2.70022) (mid 1.670693 -2.183637) (end 2.494322 -0.86022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") )
        (fp_arc (start 4.085176 -6.75022) (mid 5.49939 -6.164434) (end 6.085176 -4.75022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") )
    `
    const front_pads = `
        (pad "1" smd roundrect (at 6.535 -2.54 ${p.rot}) (size 4.2 2.5) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.1)  ${p.P1})
        (pad "1" thru_hole circle (at 3.81 -2.54 ${p.rot}) (size 3.3 3.3) (drill 3) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P1})
        (pad "2" smd roundrect (at -5.265 -5.08 ${p.rot}) (size 4.2 2.5) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.1)  ${p.P2})
        (pad "2" thru_hole circle (at -2.54 -5.08 ${p.rot}) (size 3.3 3.3) (drill 3) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P2})
    `
    const front_fabrication = `
        (property "Value" "${p.ref}" (at 0 -8 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text user "${p.ref}" (at -1.7526 1.8288 ${0 + p.rot}) (layer "F.Fab") (uuid "d7f14a36-e6d1-4041-84e0-bc8624296775") (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -7.414824 -6.32022) (end -4.864824 -6.32022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -7.414824 -3.87022) (end -7.414824 -6.32022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -4.864824 -6.75022) (end -4.864824 -6.32022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -4.864824 -3.87022) (end -7.414824 -3.87022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -4.864824 -3.87022) (end -4.864824 -2.70022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -4.864824 -2.70022) (end 0.2 -2.70022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 4.085176 -6.75022) (end -4.864824 -6.75022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 6.085176 -3.75022) (end 6.085176 -4.75022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 6.085176 -3.75022) (end 8.685176 -3.75022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 6.085176 -1.30022) (end 6.085176 -0.86022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 6.085176 -0.86022) (end 2.494322 -0.86022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 7 -7) (end -7 -7) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 8.685176 -3.75022) (end 8.685176 -1.30022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 8.685176 -1.30022) (end 6.085176 -1.30022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_arc (start 0.2 -2.70022) (mid 1.670503 -2.183399) (end 2.494322 -0.86022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_arc (start 4.085176 -6.75022) (mid 5.49939 -6.164434) (end 6.085176 -4.75022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
    `
    const front_paste = `
    `
    const pads = `
        (pad "" np_thru_hole circle (at -5.08 0 ${p.rot}) (size 1.75 1.75) (drill 1.75) (layers "*.Mask") )
        (pad "" np_thru_hole circle (at 0 0 ${p.rot}) (size 3.9878 3.9878) (drill 3.9878) (layers "*.Cu" "*.Mask") )
        (pad "" np_thru_hole circle (at 5.08 0 ${p.rot}) (size 1.75 1.75) (drill 1.75) (layers "*.Mask") )
    `
    const back_silkscreen = `
        (fp_line (start -6.085176 -3.95022) (end -6.085176 -4.75022) (stroke (width 0.15) (type solid)) (layer "B.SilkS") )
        (fp_line (start -6.085176 -1.10022) (end -6.085176 -0.86022) (stroke (width 0.15) (type solid)) (layer "B.SilkS") )
        (fp_line (start -4.085176 -6.75022) (end 1.814824 -6.75022) (stroke (width 0.15) (type solid)) (layer "B.SilkS") )
        (fp_line (start 3.314824 -6.75022) (end 4.864824 -6.75022) (stroke (width 0.15) (type solid)) (layer "B.SilkS") )
        (fp_line (start 4.364824 -2.70022) (end -0.2 -2.70022) (stroke (width 0.15) (type solid)) (layer "B.SilkS") )
        (fp_line (start 4.864824 -6.75022) (end 4.864824 -6.52022) (stroke (width 0.15) (type solid)) (layer "B.SilkS") )
        (fp_line (start 4.864824 -3.67022) (end 4.864824 -3.20022) (stroke (width 0.15) (type solid)) (layer "B.SilkS") )
        (fp_arc (start -6.085176 -4.75022) (mid -5.499392 -6.164436) (end -4.085176 -6.75022) (stroke (width 0.15) (type solid)) (layer "B.SilkS") )
        (fp_arc (start -2.494322 -0.86022) (mid -1.670693 -2.183637) (end -0.2 -2.70022) (stroke (width 0.15) (type solid)) (layer "B.SilkS") )
        (fp_arc (start 4.864824 -3.20022) (mid 4.718377 -2.846667) (end 4.364824 -2.70022) (stroke (width 0.15) (type solid)) (layer "B.SilkS") )
    `
    const back_pads = `
        (pad "1" smd roundrect (at 5.265 -5.08 ${p.rot}) (size 4.2 2.5) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.1)  ${p.P1})
        (pad "1" thru_hole circle (at 2.54 -5.08 ${p.rot}) (size 3.3 3.3) (drill 3) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P1})
        (pad "2" smd roundrect (at -6.535 -2.54 ${p.rot}) (size 4.2 2.5) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.1)  ${p.P2})
        (pad "2" thru_hole circle (at -3.81 -2.54 ${p.rot}) (size 3.3 3.3) (drill 3) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P2})
    `
    const back_fabrication = `
    `
    const back_mask = `
    `
    const back_courtyard = `
        (fp_line (start -8.685176 -3.75022) (end -8.685176 -1.30022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -8.685176 -1.30022) (end -6.085176 -1.30022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -7 -7) (end 7 -7) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -7 7) (end -7 -7) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -6.085176 -3.75022) (end -8.685176 -3.75022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -6.085176 -3.75022) (end -6.085176 -4.75022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -6.085176 -1.30022) (end -6.085176 -0.86022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -6.085176 -0.86022) (end -2.494322 -0.86022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -4.085176 -6.75022) (end 4.864824 -6.75022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 4.864824 -6.75022) (end 4.864824 -6.32022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 4.864824 -3.87022) (end 4.864824 -2.70022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 4.864824 -3.87022) (end 7.414824 -3.87022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 4.864824 -2.70022) (end -0.2 -2.70022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 7 -7) (end 7 7) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 7 7) (end -7 7) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 7.414824 -6.32022) (end 4.864824 -6.32022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 7.414824 -3.87022) (end 7.414824 -6.32022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_arc (start -6.085176 -4.75022) (mid -5.499392 -6.164436) (end -4.085176 -6.75022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_arc (start -2.494322 -0.86022) (mid -1.670502 -2.183399) (end -0.2 -2.70022) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
    `
    const back_paste = `
    `
    const edge_cuts = `
    `
    const user_drawing = `
        (fp_line (start -14.2875 -9.525) (end 14.2875 -9.525) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") )
        (fp_line (start -14.2875 9.525) (end -14.2875 -9.525) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") )
        (fp_line (start 14.2875 -9.525) (end 14.2875 9.525) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") )
        (fp_line (start 14.2875 9.525) (end -14.2875 9.525) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") )
    `
    const user_comments = `
        (fp_rect (start -3.8 3.08) (end 3.8 7.08) (stroke (width 0.12) (type default)) (fill none) (layer "Cmts.User") )
        (fp_text user "LED" (at -1.27 5.6896 ${0 + p.rot}) (unlocked yes) (layer "Cmts.User")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom)))
    `
    const user_eco1 = `
        (fp_rect (start -7 -7) (end 7 7) (stroke (width 0.12) (type default)) (fill none) (layer "Eco1.User") )
    `
    const user_eco2 = `
        (fp_line (start -7 -6.5) (end -7 6.5) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )
        (fp_line (start -6.5 -7) (end 6.5 -7) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )
        (fp_line (start -6.5 7) (end 6.5 7) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )
        (fp_line (start 6.5 -7) (end -6.5 -7) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )
        (fp_line (start 7 6.5) (end 7 -6.5) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )
        (fp_arc (start -7 -6.5) (mid -6.853553 -6.853553) (end -6.5 -7) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )
        (fp_arc (start -7 -6.5) (mid -6.853553 -6.853553) (end -6.5 -7) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )
        (fp_arc (start -6.497236 6.998884) (mid -6.850789 6.852437) (end -6.997236 6.498884) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )
        (fp_arc (start 6.5 -7) (mid 6.853553 -6.853553) (end 7 -6.5) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )
        (fp_arc (start 6.5 -7) (mid 6.853553 -6.853553) (end 7 -6.5) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )
        (fp_arc (start 7 6.5) (mid 6.853553 6.853553) (end 6.5 7) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )
    `
    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/Hot Swap/mx.step" (offset (xyz -3.81 2.54 -3.5)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/Key Switch/Cherry-MX-silent_alpaca.step" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/Keycaps/DSA_1.5u.step" (offset (xyz 0 0 12)) (scale (xyz 1 1 1)) (rotate (xyz -90 0 0)))
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
