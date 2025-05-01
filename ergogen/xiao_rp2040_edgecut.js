module.exports = {
  params: {
    designator: 'MCU',
    side: 'F',
    show_3d: false,
    P1: {type: 'net', value: 'P1'}, // undefined}, // change to undefined as needed
    P2: {type: 'net', value: 'P2'}, // undefined}, // change to undefined as needed
    P3: {type: 'net', value: 'P3'}, // undefined}, // change to undefined as needed
    P4: {type: 'net', value: 'P4'}, // undefined}, // change to undefined as needed
    P5: {type: 'net', value: 'P5'}, // undefined}, // change to undefined as needed
    P6: {type: 'net', value: 'P6'}, // undefined}, // change to undefined as needed
    P7: {type: 'net', value: 'P7'}, // undefined}, // change to undefined as needed
    P8: {type: 'net', value: 'P8'}, // undefined}, // change to undefined as needed
    P9: {type: 'net', value: 'P9'}, // undefined}, // change to undefined as needed
    P10: {type: 'net', value: 'P10'}, // undefined}, // change to undefined as needed
    P11: {type: 'net', value: 'P11'}, // undefined}, // change to undefined as needed
    P12: {type: 'net', value: 'P12'}, // undefined}, // change to undefined as needed
    P13: {type: 'net', value: 'P13'}, // undefined}, // change to undefined as needed
    P14: {type: 'net', value: 'P14'}, // undefined}, // change to undefined as needed
  },
  body: p => {
    const standard_opening = `(
         footprint "TB2086_MCU:XIAO-RP2040-edgecut"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "${p.side}.Cu")
        (property "Reference" "${p.ref}" (at -8.5 -12 ${0 + p.rot}) (unlocked yes) (layer "${p.side}.SilkS") ${p.ref_hide}  (effects (font (size 0.635 0.635) (thickness 0.1016))))
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_arc (start -9.065741 -8.869238) (mid -8.667469 -9.792483) (end -7.899999 -10.442092) (stroke (width 0.12) (type default)) (layer "F.SilkS") )
        (fp_arc (start -7.410001 10.6175) (mid -8.532439 9.974935) (end -9.115981 8.82071) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_arc (start 7.879995 -10.442088) (mid 8.647465 -9.792479) (end 9.045737 -8.869234) (stroke (width 0.12) (type default)) (layer "F.SilkS") )
        (fp_arc (start 9.112418 8.823645) (mid 8.533798 9.976631) (end 7.419999 10.6275) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_circle (center 9.256 -10.14) (end 9.256 -10.394) (stroke (width 0.5) (type solid)) (fill solid) (layer "F.SilkS") )
    `
    const front_pads = `
        (pad "1" smd roundrect (at 8.455 -7.62 ${180 + p.rot}) (size 2.432 1.524) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P1})
        (pad "2" smd roundrect (at 8.455 -5.08 ${180 + p.rot}) (size 2.432 1.524) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P2})
        (pad "3" smd roundrect (at 8.455 -2.54 ${180 + p.rot}) (size 2.432 1.524) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P3})
        (pad "4" smd roundrect (at 8.455 0 ${180 + p.rot}) (size 2.432 1.524) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P4})
        (pad "5" smd roundrect (at 8.455 2.54 ${180 + p.rot}) (size 2.432 1.524) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P5})
        (pad "6" smd roundrect (at 8.455 5.08 ${180 + p.rot}) (size 2.432 1.524) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P6})
        (pad "7" smd roundrect (at 8.455 7.62 ${180 + p.rot}) (size 2.432 1.524) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P7})
        (pad "8" smd roundrect (at -8.455 -7.62 ${p.rot}) (size 2.432 1.524) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P8})
        (pad "9" smd roundrect (at -8.455 -5.08 ${p.rot}) (size 2.432 1.524) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P9})
        (pad "10" smd roundrect (at -8.455 -2.54 ${p.rot}) (size 2.432 1.524) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P10})
        (pad "11" smd roundrect (at -8.455 0 ${p.rot}) (size 2.432 1.524) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P11})
        (pad "12" smd roundrect (at -8.455 2.54 ${p.rot}) (size 2.432 1.524) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P12})
        (pad "13" smd roundrect (at -8.455 5.08 ${p.rot}) (size 2.432 1.524) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P13})
        (pad "14" smd roundrect (at -8.455 7.62 ${p.rot}) (size 2.432 1.524) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P14})
    `
    const front_fabrication = `
        (property "Value" "XIAO-RP2040-edgecut" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab")  (effects (font (size 0.635 0.635) (thickness 0.1016))))
        (property "Footprint" "" (at 0 0 ${90 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${90 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${90 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_rect (start -8.9 -10.55) (end 8.9 10.425) (stroke (width 0.1) (type default)) (fill none) (layer "F.Fab") )
        (fp_circle (center 7.804 -9.426) (end 7.804 -9.68) (stroke (width 0.5) (type solid)) (fill solid) (layer "F.Fab") )
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_rect (start -8.9 -10.55) (end 8.9 10.425) (stroke (width 0.05) (type default)) (fill none) (layer "F.CrtYd") )
    `
    const front_paste = `
    `
    const front_pads_holes = `
        (pad "1" thru_hole circle (at 7.62 -7.62 ${180 + p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P1})
        (pad "2" thru_hole circle (at 7.62 -5.08 ${180 + p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P2})
        (pad "3" thru_hole circle (at 7.62 -2.54 ${180 + p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P3})
        (pad "4" thru_hole circle (at 7.62 0 ${180 + p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P4})
        (pad "5" thru_hole circle (at 7.62 2.54 ${180 + p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P5})
        (pad "6" thru_hole circle (at 7.62 5.08 ${180 + p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P6})
        (pad "7" thru_hole circle (at 7.62 7.62 ${180 + p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P7})
        (pad "8" thru_hole circle (at -7.62 -7.62 ${p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P8})
        (pad "9" thru_hole circle (at -7.62 -5.08 ${p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P9})
        (pad "10" thru_hole circle (at -7.62 -2.54 ${p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P10})
        (pad "11" thru_hole circle (at -7.62 0 ${p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P11})
        (pad "12" thru_hole circle (at -7.62 2.54 ${p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P12})
        (pad "13" thru_hole circle (at -7.62 5.08 ${p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P13})
        (pad "14" thru_hole circle (at -7.62 7.62 ${p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P14})
    `
    const back_pads_holes = `
        (pad "1" thru_hole circle (at -7.62 -7.62 ${180 + p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P1})
        (pad "2" thru_hole circle (at -7.62 -5.08 ${180 + p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P2})
        (pad "3" thru_hole circle (at -7.62 -2.54 ${180 + p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P3})
        (pad "4" thru_hole circle (at -7.62 0 ${180 + p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P4})
        (pad "5" thru_hole circle (at -7.62 2.54 ${180 + p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P5})
        (pad "6" thru_hole circle (at -7.62 5.08 ${180 + p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P6})
        (pad "7" thru_hole circle (at -7.62 7.62 ${180 + p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P7})
        (pad "8" thru_hole circle (at 7.62 -7.62 ${p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P8})
        (pad "9" thru_hole circle (at 7.62 -5.08 ${p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P9})
        (pad "10" thru_hole circle (at 7.62 -2.54 ${p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P10})
        (pad "11" thru_hole circle (at 7.62 0 ${p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P11})
        (pad "12" thru_hole circle (at 7.62 2.54 ${p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P12})
        (pad "13" thru_hole circle (at 7.62 5.08 ${p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P13})
        (pad "14" thru_hole circle (at 7.62 7.62 ${p.rot}) (size 1.524 1.524) (drill 0.889) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P14})
    `
    const back_silkscreen = `
        (fp_arc (start -9.045737 -8.869234) (mid -8.647465 -9.792479) (end -7.879995 -10.442088) (stroke (width 0.12) (type default)) (layer "B.SilkS") )
        (fp_arc (start -7.419999 10.6275) (mid -8.533798 9.976631) (end -9.112418 8.823645) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_arc (start 7.899999 -10.442092) (mid 8.667469 -9.792483) (end 9.065741 -8.869238) (stroke (width 0.12) (type default)) (layer "B.SilkS") )
        (fp_arc (start 9.115981 8.82071) (mid 8.532439 9.974935) (end 7.410001 10.6175) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_circle (center -9.256 -10.14) (end -9.256 -10.394) (stroke (width 0.5) (type solid)) (fill solid) (layer "B.SilkS") )
    `
    const back_pads = `
        (pad "1" smd roundrect (at -8.455 -7.62 ${180 + p.rot}) (size 2.432 1.524) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P1})
        (pad "2" smd roundrect (at -8.455 -5.08 ${180 + p.rot}) (size 2.432 1.524) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P2})
        (pad "3" smd roundrect (at -8.455 -2.54 ${180 + p.rot}) (size 2.432 1.524) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P3})
        (pad "4" smd roundrect (at -8.455 0 ${180 + p.rot}) (size 2.432 1.524) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P4})
        (pad "5" smd roundrect (at -8.455 2.54 ${180 + p.rot}) (size 2.432 1.524) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P5})
        (pad "6" smd roundrect (at -8.455 5.08 ${180 + p.rot}) (size 2.432 1.524) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P6})
        (pad "7" smd roundrect (at -8.455 7.62 ${180 + p.rot}) (size 2.432 1.524) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P7})
        (pad "8" smd roundrect (at 8.455 -7.62 ${p.rot}) (size 2.432 1.524) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P8})
        (pad "9" smd roundrect (at 8.455 -5.08 ${p.rot}) (size 2.432 1.524) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P9})
        (pad "10" smd roundrect (at 8.455 -2.54 ${p.rot}) (size 2.432 1.524) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P10})
        (pad "11" smd roundrect (at 8.455 0 ${p.rot}) (size 2.432 1.524) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P11})
        (pad "12" smd roundrect (at 8.455 2.54 ${p.rot}) (size 2.432 1.524) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P12})
        (pad "13" smd roundrect (at 8.455 5.08 ${p.rot}) (size 2.432 1.524) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P13})
        (pad "14" smd roundrect (at 8.455 7.62 ${p.rot}) (size 2.432 1.524) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P14})
    `
    const back_fabrication = `
        (property "Value" "XIAO-RP2040-edgecut" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "B.Fab")  (effects (font (size 0.635 0.635) (thickness 0.1016)) (justify mirror)))
        (property "Footprint" "" (at 0 0 ${-90 + p.rot}) (unlocked yes) (layer "B.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify mirror)))
        (property "Datasheet" "" (at 0 0 ${-90 + p.rot}) (unlocked yes) (layer "B.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify mirror)))
        (property "Description" "" (at 0 0 ${-90 + p.rot}) (unlocked yes) (layer "B.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify mirror)))
        (fp_rect (start -8.9 -10.55) (end 8.9 10.425) (stroke (width 0.1) (type default)) (fill none) (layer "B.Fab") )
    `
    const back_mask = `
    `
    const back_courtyard = `
        (fp_rect (start -8.9 -10.55) (end 8.9 10.425) (stroke (width 0.05) (type default)) (fill none) (layer "B.CrtYd") )
    `
    const back_paste = `
    `
    const edge_cuts = `
        (fp_line (start -7.609999 9.6255) (end -7.609767 -10.462553) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_line (start 6.630001 10.6255) (end -6.609999 10.6255) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_line (start 7.630001 9.6255) (end 7.629769 -10.462553) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start -8.109767 -10.962553) (mid -7.756215 -10.816105) (end -7.609767 -10.462553) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start -6.609999 10.6255) (mid -7.317106 10.332607) (end -7.609999 9.6255) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start 7.629769 -10.462553) (mid 7.776219 -10.816103) (end 8.129769 -10.962553) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start 7.630001 9.6255) (mid 7.337108 10.332607) (end 6.630001 10.6255) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
    `
    const user_drawing = `
    `
    const user_comments = `
        (fp_rect (start -8.88 -10.4825) (end 8.9 10.425) (stroke (width 0.2) (type solid)) (fill none) (layer "Cmts.User") )
    `
    const user_eco1 = `
    `
    const user_eco2 = `
    `
    let rotate = `rotate (xyz 0 180 0)`
    if (p.side == 'B') {
        rotate = `rotate (xyz 0 180 180)`
    }
    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/xiao_rp2040.step" (offset (xyz 0 0 1.2)) (scale (xyz 1 1 1)) (${rotate}))
    `
    const standard_closing = `
            )
    `
    let final = standard_opening;
    if (p.side == 'F') {
        final += front_silkscreen;
        final += front_pads;
        final += front_fabrication;
        final += front_mask;
        final += front_courtyard;
        final += front_paste;
        final += front_pads_holes;
    }

    if (p.side == 'B') {
        final += back_pads_holes;
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
