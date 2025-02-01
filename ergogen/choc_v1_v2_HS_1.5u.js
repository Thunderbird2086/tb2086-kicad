module.exports = {
  params: {
    designator: 'S',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,     // delete if not needed
    P2: {type: 'net', value: undefined}, // change to undefined as needed
    P1: {type: 'net', value: undefined}, // change to undefined as needed
  },
  body: p => {
    const standard_opening = `(
         footprint "TB2086_KEYSWITCH:SW_choc_v1_v2_HS_1.5u_reversible"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (descr "Hotswap footprint for Kailh Choc v2 style switches")
        (property "Reference" "${p.ref}" (at -4.3688 -2.3368 ${180 + p.rot}) (layer "${p.side}.SilkS") ${p.ref_hide}  (effects (font (size 1 1) (thickness 0.15))))
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (property "Value" "SW_choc_v2_HS_1.5u" (at 0 -6 ${180 + p.rot}) (layer "F.SilkS") (hide yes)  (effects (font (size 1 1) (thickness 0.15))))
        (fp_line (start -2.3 7.475) (end -1.5 8.275) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -1.5 3.625) (end -2.3 4.425) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -1.5 3.625) (end -0.5 3.625) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -1.5 8.275) (end -0.5 8.275) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start 7.504 1.475) (end 6.504 1.475) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start 7.504 1.475) (end 7.504 2.175) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_arc (start 7.25 5.325) (mid 7.015685 5.890685) (end 6.45 6.125) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
    `
    const front_pads = `
        (pad "1" smd roundrect (at 7.23 3.75 ${p.rot}) (size 3.85 2.6) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.1)  ${p.P1})
        (pad "2" smd roundrect (at -2.045 5.95 ${p.rot}) (size 3.1 2.6) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.1)  ${p.P2})
    `
    const front_fabrication = `
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -4.104 4.975) (end -4.104 6.925) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -4.104 4.975) (end -2.3 4.975) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -4.104 6.925) (end -2.3 6.925) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -2.3 4.975) (end -2.3 4.425) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -2.3 7.475) (end -2.3 6.925) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -2.3 7.475) (end -1.5 8.275) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -1.5 3.625) (end -2.3 4.425) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -1.5 3.625) (end 0.3 3.625) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -1.5 8.275) (end 1.65 8.275) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 2.45 7.475) (end 1.65 8.275) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 2.45 7.475) (end 2.45 7.125) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 3.45 6.125) (end 6.45 6.125) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 7.25 4.725) (end 9.104 4.725) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 7.25 5.325) (end 7.25 4.725) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 7.504 1.475) (end 3.4 1.475) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 7.504 1.475) (end 7.504 2.175) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 7.504 2.175) (end 7.504 2.775) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 9.104 2.775) (end 7.504 2.775) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 9.104 4.725) (end 9.104 2.775) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_arc (start 2.45 7.125) (mid 2.742893 6.417893) (end 3.45 6.125) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_arc (start 2.455444 2.13293) (mid 1.577272 3.167235) (end 0.299999 3.624999) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_arc (start 2.460307 2.13298) (mid 2.826423 1.655848) (end 3.4 1.475) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_arc (start 7.25 5.325) (mid 7.015685 5.890685) (end 6.45 6.125) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
    `
    const front_paste = `
    `
    const pads = `
        (pad "" np_thru_hole circle (at 5.5 0 ${180 + p.rot}) (size 1.7 1.7) (drill 1.7) (layers "*.Cu" "*.Mask") )
        (pad "1" thru_hole circle (at -5 3.75 ${p.rot}) (size 3.3 3.3) (drill 3) (layers "*.Cu" "B.Mask") (remove_unused_layers no)  ${p.P1})
        (pad "1" thru_hole circle (at 0 3.3 ${p.rot}) (size 0.5 0.5) (drill 0.3) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P1})
        (pad "1" thru_hole circle (at 5 3.75 ${p.rot}) (size 3.3 3.3) (drill 3) (layers "*.Cu" "F.Mask") (remove_unused_layers no)  ${p.P1})
        (pad "2" thru_hole circle (at 0 5.95 ${p.rot}) (size 3.3 3.3) (drill 3) (layers "*.Cu" "F.Mask") (remove_unused_layers no)  ${p.P2})
    `
    const back_silkscreen = `
        (fp_line (start -7.504 1.475) (end -7.504 2.175) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start -7.504 1.475) (end -6.504 1.475) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 1.5 3.625) (end 0.5 3.625) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 1.5 3.625) (end 2.3 4.425) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 1.5 8.275) (end 0.5 8.275) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 2.3 7.475) (end 1.5 8.275) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_arc (start -6.45 6.125) (mid -7.015685 5.890685) (end -7.25 5.325) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
    `
    const back_pads = `
        (pad "" np_thru_hole circle (at -5.5 0 ${180 + p.rot}) (size 1.7 1.7) (drill 1.7) (layers "F&B.Cu" "*.Mask") )
        (pad "" np_thru_hole circle (at -5 -5.15 ${180 + p.rot}) (size 1.6 1.6) (drill 1.6) (layers "F&B.Cu" "*.Mask") )
        (pad "" np_thru_hole circle (at 0 0 ${180 + p.rot}) (size 5 5) (drill 5) (layers "F&B.Cu" "*.Mask") )
        (pad "" np_thru_hole circle (at 5 -5.15 ${180 + p.rot}) (size 1.6 1.6) (drill 1.6) (layers "F&B.Cu" "*.Mask") )
        (pad "1" smd roundrect (at -7.23 3.75 ${p.rot}) (size 3.85 2.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.1)  ${p.P1})
        (pad "2" smd roundrect (at 2.045 5.95 ${p.rot}) (size 3.1 2.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.1)  ${p.P2})
    `
    const back_fabrication = `
    `
    const back_mask = `
    `
    const back_courtyard = `
        (fp_line (start -9.104 2.775) (end -7.504 2.775) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -9.104 4.725) (end -9.104 2.775) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -7.504 1.475) (end -7.504 2.175) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -7.504 1.475) (end -3.4 1.475) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -7.504 2.175) (end -7.504 2.775) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -7.25 4.725) (end -9.104 4.725) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -7.25 5.325) (end -7.25 4.725) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -7 -7) (end 7 -7) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -7 7) (end -7 -7) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -3.45 6.125) (end -6.45 6.125) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -2.45 7.475) (end -2.45 7.125) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -2.45 7.475) (end -1.65 8.275) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 1.5 3.625) (end -0.3 3.625) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 1.5 3.625) (end 2.3 4.425) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 1.5 8.275) (end -1.65 8.275) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 2.3 4.975) (end 2.3 4.425) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 2.3 7.475) (end 1.5 8.275) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 2.3 7.475) (end 2.3 6.925) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 4.104 4.975) (end 2.3 4.975) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 4.104 4.975) (end 4.104 6.925) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 4.104 6.925) (end 2.3 6.925) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 7 -7) (end 7 7) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 7 7) (end -7 7) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_arc (start -6.45 6.125) (mid -7.015685 5.890685) (end -7.25 5.325) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_arc (start -3.45 6.125) (mid -2.742893 6.417893) (end -2.45 7.125) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_arc (start -3.4 1.475) (mid -2.826423 1.655848) (end -2.460307 2.13298) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_arc (start -0.299999 3.624999) (mid -1.577272 3.167235) (end -2.455444 2.13293) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
    `
    const back_paste = `
    `
    const edge_cuts = `
    `
    const user_drawing = `
        (fp_line (start -13.5 -8.5) (end 13.5 -8.5) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") )
        (fp_line (start -13.5 8.5) (end -13.5 -8.5) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") )
        (fp_line (start 13.5 -8.5) (end 13.5 8.5) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") )
        (fp_line (start 13.5 8.5) (end -13.5 8.5) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") )
        (fp_text user "18x17 spacing" (at 0 -7.6 ${0 + p.rot}) (layer "Dwgs.User")  (effects (font (size 1 1) (thickness 0.15))))
    `
    const user_comments = `
        (fp_line (start -14.2875 -9.525) (end -14.2875 9.525) (stroke (width 0.12) (type solid)) (layer "Cmts.User") )
        (fp_line (start -14.2875 9.525) (end 14.2875 9.525) (stroke (width 0.12) (type solid)) (layer "Cmts.User") )
        (fp_line (start 14.2875 -9.525) (end -14.2875 -9.525) (stroke (width 0.12) (type solid)) (layer "Cmts.User") )
        (fp_line (start 14.2875 9.525) (end 14.2875 -9.525) (stroke (width 0.12) (type solid)) (layer "Cmts.User") )
        (fp_rect (start -2.75 -6.405) (end 2.75 -3.455) (stroke (width 0.1) (type default)) (fill none) (layer "Cmts.User") )
        (fp_text user "19.05 spacing" (at 0 -8.7 ${0 + p.rot}) (layer "Cmts.User")  (effects (font (size 1 1) (thickness 0.15))))
        (fp_text user "LED" (at 0 -4.7625 ${0 + p.rot}) (unlocked yes) (layer "Cmts.User")  (effects (font (size 1 1) (thickness 0.15))))
    `
    const user_eco1 = `
    `
    const user_eco2 = `
        (fp_line (start -6.95 6.45) (end -6.95 -6.45) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )
        (fp_line (start -6.45 -6.95) (end 6.45 -6.95) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )
        (fp_line (start 6.45 6.95) (end -6.45 6.95) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )
        (fp_line (start 6.95 -6.45) (end 6.95 6.45) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )
        (fp_arc (start -6.95 -6.45) (mid -6.803553 -6.803553) (end -6.45 -6.95) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )
        (fp_arc (start -6.45 6.95) (mid -6.803553 6.803553) (end -6.95 6.45) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )
        (fp_arc (start -6.45 6.95) (mid -6.803553 6.803553) (end -6.95 6.45) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )
        (fp_arc (start -6.45 6.95) (mid -6.803553 6.803553) (end -6.95 6.45) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )
        (fp_arc (start 6.45 -6.95) (mid 6.803553 -6.803553) (end 6.95 -6.45) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )
        (fp_arc (start 6.95 6.45) (mid 6.803553 6.803553) (end 6.45 6.95) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )
        (fp_arc (start 6.95 6.45) (mid 6.803553 6.803553) (end 6.45 6.95) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )
    `
    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/Hot Swap/choc.step" (offset (xyz -5 -3.75 -3.5)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 180)))
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/Key Switch/Choc-V1-red.step" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/Keycaps/Kailh Choc FunkMonk 1_5u.step" (offset (xyz 0 0 2.5)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
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
