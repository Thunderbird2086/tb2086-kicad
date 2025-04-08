module.exports = {
  params: {
    designator: 'MCU',
    side: 'F',
    edgecut: false,
    show_3d: false,
    P002: {type: 'net', value: 'P002'}, // undefined},
    P003: {type: 'net', value: 'P003'}, // undefined},
    P028: {type: 'net', value: 'P028'}, // undefined},
    P029: {type: 'net', value: 'P029'}, // undefined},
    P004: {type: 'net', value: 'P004'}, // undefined},
    P005: {type: 'net', value: 'P005'}, // undefined},
    P111: {type: 'net', value: 'P111'}, // undefined},
    VCC5: {type: 'net', value: 'VCC5'}, // undefined},
    GND: {type: 'net', value: 'GND'}, // undefined},
    VCC3: {type: 'net', value: 'VCC3'}, // undefined},
    P115: {type: 'net', value: 'P115'}, // undefined},
    P114: {type: 'net', value: 'P114'}, // undefined},
    P113: {type: 'net', value: 'P113'}, // undefined},
    P112: {type: 'net', value: 'P112'}, // undefined},
    BAT_N: {type: 'net', value: 'BAT_N'}, // undefined},
    BAT_P: {type: 'net', value: 'BAT_P'}, // undefined},
    P009: {type: 'net', value: 'P009'}, // undefined},
    P010: {type: 'net', value: 'P010'}, // undefined},
    DIO: {type: 'net', value: 'DIO'}, // undefined},
    CLK: {type: 'net', value: 'CLK'}, // undefined},
    RST: {type: 'net', value: 'RST'}, // undefined},
    //GND: {type: 'net', value: 'GND'}, // undefined},
  },
  body: p => {
    let fp_name = 'TB2086_MCU:Xiao_nRF52840'
    if (p.edgecut) {
        fp_name += '_edgecut'
    }
    const standard_opening = `(
         footprint "${fp_name}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (property "Reference" "${p.ref}" (at -6.5 11.65 ${0 + p.rot}) (layer "${p.side}.SilkS") ${p.ref_hide}  (effects (font (size 1 1) (thickness 0.15)) (justify right)))
        (attr through_hole exclude_from_pos_files exclude_from_bom)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
    `
    const front_silkscreen_non_edgecut = `
        (fp_line (start -6.890001 -10.63) (end 6.889999 -10.63) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_line (start -4.500881 -4.6355) (end -4.500881 -10.63) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_line (start 4.500879 -4.6355) (end -4.500881 -4.6355) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_line (start 4.500879 -4.6355) (end 4.500879 -10.63) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_line (start 6.889999 10.6775) (end -6.890001 10.6775) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_arc (start -9.055742 -8.816738) (mid -8.302299 -10.116834) (end -6.890001 -10.63) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_arc (start -6.89 10.6775) (mid -8.302299 10.164335) (end -9.055742 8.864239) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_arc (start 6.889999 -10.63) (mid 8.302298 -10.116835) (end 9.05574 -8.816738) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_arc (start 9.05574 8.864238) (mid 8.302298 10.164335) (end 6.889999 10.6775) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_text user "BAT-" (at -2.889999 -1.62075 ${0 + p.rot}) (unlocked yes) (layer "F.SilkS")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom)))
        (fp_text user "P0.09" (at 3.81 7.6075 ${90 + p.rot}) (unlocked yes) (layer "F.SilkS")  (effects (font (size 1 1) (thickness 0.15)) (justify left)))
        (fp_text user "BAT+" (at -2.889999 0.28425 ${0 + p.rot}) (unlocked yes) (layer "F.SilkS")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom)))
        (fp_text user "P0.10" (at 5.715 7.6075 ${90 + p.rot}) (unlocked yes) (layer "F.SilkS")  (effects (font (size 1 1) (thickness 0.15)) (justify left)))
        (fp_text user "1" (at -7.62 -8.82 ${0 + p.rot}) (layer "F.SilkS")  (effects (font (size 1 1) (thickness 0.15)) (justify bottom)))
    `
    const front_pads = `
    `
    const front_pads_non_edgecut = `
        (pad "1" smd roundrect (at -8.92 -7.62 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P002})
        (pad "2" smd roundrect (at -8.92 -5.08 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P003})
        (pad "3" smd roundrect (at -8.92 -2.54 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P028})
        (pad "4" smd roundrect (at -8.92 0 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P029})
        (pad "5" smd roundrect (at -8.92 2.54 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P004})
        (pad "6" smd roundrect (at -8.92 5.08 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P005})
        (pad "7" smd roundrect (at -8.92 7.62 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P111})
        (pad "8" smd roundrect (at 8.92 -7.62 ${180 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.VCC5})
        (pad "9" smd roundrect (at 8.92 -5.08 ${180 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GND})
        (pad "10" smd roundrect (at 8.92 -2.539999 ${180 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.VCC3})
        (pad "11" smd roundrect (at 8.92 0 ${180 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P115})
        (pad "12" smd roundrect (at 8.92 2.54 ${180 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P114})
        (pad "13" smd roundrect (at 8.92 5.08 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P113})
        (pad "14" smd roundrect (at 8.92 7.62 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P112})
        (pad "15" smd roundrect (at -4.445001 -2.2225 ${p.rot}) (size 2.5 1.35) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.BAT_N})
        (pad "16" smd roundrect (at -4.445002 -0.3175 ${p.rot}) (size 2.5 1.35) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.BAT_P})
        (pad "17" smd roundrect (at 3.81 9.2075 ${90 + p.rot}) (size 2.5 1.35) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P009})
        (pad "18" smd roundrect (at 5.715 9.2075 ${90 + p.rot}) (size 2.5 1.35) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P010})
    `
    const front_fabrication = `
        (property "Value" "${fp_name}" (at 0 6.985 ${0 + p.rot}) (unlocked yes) (layer "F.Fab")  (effects (font (size 1 1) (thickness 0.15))))
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
        (descr "Footprint for Seeduino Xiao nRF52840 controllers, through hole and castellated pads")
        (pad "1" thru_hole circle (at -7.62 -7.62 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P002})
        (pad "2" thru_hole circle (at -7.62 -5.08 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P003})
        (pad "3" thru_hole circle (at -7.62 -2.54 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P028})
        (pad "4" thru_hole circle (at -7.62 0 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P029})
        (pad "5" thru_hole circle (at -7.62 2.54 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P004})
        (pad "6" thru_hole circle (at -7.62 5.08 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P005})
        (pad "7" thru_hole circle (at -7.62 7.62 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P111})
        (pad "8" thru_hole circle (at 7.62 -7.62 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.VCC5})
        (pad "9" thru_hole roundrect (at 7.62 -5.08 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GND})
        (pad "10" thru_hole circle (at 7.62 -2.54 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.VCC3})
        (pad "11" thru_hole circle (at 7.62 0 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P115})
        (pad "12" thru_hole circle (at 7.62 2.54 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P114})
        (pad "13" thru_hole circle (at 7.62 5.08 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P113})
        (pad "14" thru_hole circle (at 7.62 7.62 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P112})
    `
    const pads_non_edgecut = `
        (pad "15" thru_hole roundrect (at -4.445001 -2.2225 ${p.rot}) (size 1.8 1.35) (drill 1.05) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.BAT_N})
        (pad "16" thru_hole roundrect (at -4.445002 -0.3175 ${p.rot}) (size 1.8 1.35) (drill 1.05) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.BAT_P})
        (pad "17" thru_hole roundrect (at 3.81 9.2075 ${90 + p.rot}) (size 1.8 1.35) (drill 1.05) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.P009})
        (pad "18" thru_hole roundrect (at 5.715 9.2075 ${90 + p.rot}) (size 1.8 1.35) (drill 1.05) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.P010})
        (pad "19" thru_hole circle (at -1.27 -8.5725 ${180 + p.rot}) (size 1.8 1.8) (drill 1.05) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.DIO})
        (pad "20" thru_hole circle (at 1.27 -8.5725 ${180 + p.rot}) (size 1.8 1.8) (drill 1.05) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.CLK})
        (pad "21" thru_hole circle (at -1.27 -6.0325 ${180 + p.rot}) (size 1.8 1.8) (drill 1.05) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.RST})
        (pad "22" thru_hole roundrect (at 1.27 -6.0325 ${180 + p.rot}) (size 1.8 1.8) (drill 1.05) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GND})
    `
    const back_silkscreen_non_edgecut = `
        (fp_text user "BAT-" (at 0.754999 -1.6225 ${0 + p.rot}) (unlocked yes) (layer "B.SilkS")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom mirror)))
        (fp_text user "BAT+" (at 0.754999 0.2825 ${0 + p.rot}) (unlocked yes) (layer "B.SilkS")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom mirror)))
    `
    const back_silkscreen_edgecut = `
        (fp_arc (start -9.055738 -8.816734) (mid -8.657466 -9.739979) (end -7.889996 -10.389588) (stroke (width 0.12) (type default)) (layer "B.SilkS") )
        (fp_arc (start -7.43 10.68) (mid -8.543799 10.029131) (end -9.122419 8.876145) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_arc (start 7.889998 -10.389592) (mid 8.657468 -9.739983) (end 9.05574 -8.816738) (stroke (width 0.12) (type default)) (layer "B.SilkS") )
        (fp_arc (start 9.10598 8.87321) (mid 8.522438 10.027435) (end 7.4 10.67) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_circle (center -8.47 -9.32) (end -8.17 -9.32) (stroke (width 0.12) (type solid)) (fill solid) (layer "B.SilkS") )
    `
    const back_pads = `
    `
    const back_pads_edgecut = `
        (pad "1" smd roundrect (at -8.92 -7.62 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P002})
        (pad "2" smd roundrect (at -8.92 -5.08 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P003})
        (pad "3" smd roundrect (at -8.92 -2.54 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P028})
        (pad "4" smd roundrect (at -8.92 0 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P029})
        (pad "5" smd roundrect (at -8.92 2.54 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P004})
        (pad "6" smd roundrect (at -8.92 5.08 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P005})
        (pad "7" smd roundrect (at -8.92 7.62 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P111})
        (pad "8" smd roundrect (at 8.92 -7.62 ${180 + p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.VCC5})
        (pad "9" smd roundrect (at 8.92 -5.08 ${180 + p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.GND})
        (pad "10" smd roundrect (at 8.92 -2.539999 ${180 + p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.VCC3})
        (pad "11" smd roundrect (at 8.92 0 ${180 + p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P115})
        (pad "12" smd roundrect (at 8.92 2.54 ${180 + p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P114})
        (pad "13" smd roundrect (at 8.92 5.08 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P113})
        (pad "14" smd roundrect (at 8.92 7.62 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P112})
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
    const edge_cuts_edgecut = `
        (fp_line (start -7.62 9.678) (end -7.619768 -10.410053) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_line (start 6.62 10.678) (end -6.62 10.678) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_line (start 7.62 9.678) (end 7.619768 -10.410053) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start -8.119768 -10.910053) (mid -7.766216 -10.763605) (end -7.619768 -10.410053) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start -6.62 10.678) (mid -7.327107 10.385107) (end -7.62 9.678) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start 7.619768 -10.410053) (mid 7.766218 -10.763602) (end 8.119768 -10.910053) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start 7.62 9.678) (mid 7.327107 10.385107) (end 6.62 10.678) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
    `
    const user_drawing = `
    `
    const user_comments = `
        (fp_rect (start -8.890001 -10.43) (end 8.889999 10.4775) (stroke (width 0.2) (type solid)) (fill none) (layer "Cmts.User") )
        (fp_rect (start -4.500881 -11.98626) (end 4.500879 -4.6355) (stroke (width 0.1) (type default)) (fill none) (layer "Cmts.User") )
        (fp_text user "USB" (at -0.000001 -10.6425 ${0 + p.rot}) (layer "Cmts.User")  (effects (font (size 1 1) (thickness 0.15)) (justify bottom)))
    `
    const user_eco1 = `
    `
    const user_eco2 = `
    `
    let offset = 'offset (xyz 0 0 0)'
    if (p.edgecut) {
        offset = 'offset (xyz 0 0 -3)'
    }
    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/xiao_rp2040.step" (${offset}) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
    `
    const standard_closing = `
            )
    `

    let final = standard_opening;
    final += front_silkscreen;
    final += front_pads;
    if (!p.edgecut) {
        final += front_silkscreen_non_edgecut;
        final += front_pads_non_edgecut;
    }
    final += front_fabrication;
    final += front_mask;
    final += front_courtyard;
    final += front_paste;
    final += pads;
    if (!p.edgecut) {
        final += pads_non_edgecut;
        final += back_silkscreen_non_edgecut;
    } else {
        final += back_silkscreen_edgecut;
    }

    final += back_pads;
    if (p.edgecut) {
        final += back_pads_edgecut;
    }
    final += back_fabrication;
    final += back_mask;
    final += back_courtyard;
    final += back_paste;
    final += edge_cuts;
    if (p.edgecut) {
        final += edge_cuts_edgecut;
    }

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
