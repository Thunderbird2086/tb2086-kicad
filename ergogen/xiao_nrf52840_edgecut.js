module.exports = {
  params: {
    designator: 'MCU',    // change it accordingly
    side: 'F',          // delete if not needed
    show_3d: false,     // delete if not needed
    P7: {type: 'net', value: 'P7'}, // undefined}, // change to undefined as needed
    P1: {type: 'net', value: 'P1'}, // undefined}, // change to undefined as needed
    P5: {type: 'net', value: 'P5'}, // undefined}, // change to undefined as needed
    P6: {type: 'net', value: 'P6'}, // undefined}, // change to undefined as needed
    P14: {type: 'net', value: 'P14'}, // undefined}, // change to undefined as needed
    P12: {type: 'net', value: 'P12'}, // undefined}, // change to undefined as needed
    P4: {type: 'net', value: 'P4'}, // undefined}, // change to undefined as needed
    P10: {type: 'net', value: 'P10'}, // undefined}, // change to undefined as needed
    P3: {type: 'net', value: 'P3'}, // undefined}, // change to undefined as needed
    P13: {type: 'net', value: 'P13'}, // undefined}, // change to undefined as needed
    P8: {type: 'net', value: 'P8'}, // undefined}, // change to undefined as needed
    P11: {type: 'net', value: 'P11'}, // undefined}, // change to undefined as needed
    P9: {type: 'net', value: 'P9'}, // undefined}, // change to undefined as needed
    P2: {type: 'net', value: 'P2'}, // undefined}, // change to undefined as needed
  },
  body: p => {
    const standard_opening = `(
         footprint "Xiao_nRF52840_edgecut"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "${p.side}.Cu")
        (property "Reference" "${p.ref}" (at -6.5 11.65 ${0 + p.rot}) (layer "${p.side}.SilkS") ${p.ref_hide}  (effects (font (size 1 1) (thickness 0.15)) (justify right)))
        (attr through_hole exclude_from_pos_files exclude_from_bom)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_arc (start -9.05574 -8.816738) (mid -8.657468 -9.739983) (end -7.889998 -10.389592) (stroke (width 0.12) (type default)) (layer "F.SilkS") )
        (fp_arc (start -7.4 10.67) (mid -8.522439 10.027436) (end -9.10598 8.87321) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_arc (start 7.889996 -10.389588) (mid 8.657466 -9.739979) (end 9.055738 -8.816734) (stroke (width 0.12) (type default)) (layer "F.SilkS") )
        (fp_arc (start 9.122419 8.876145) (mid 8.543799 10.029131) (end 7.43 10.68) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_circle (center 8.47 -9.32) (end 8.17 -9.32) (stroke (width 0.12) (type solid)) (fill solid) (layer "F.SilkS") )
    `
    const front_pads = `
        (pad "1" smd roundrect (at 8.92 -7.62 ${p.rot}) (size 2.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P1})
        (pad "2" smd roundrect (at 8.92 -5.08 ${p.rot}) (size 2.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P2})
        (pad "3" smd roundrect (at 8.92 -2.54 ${p.rot}) (size 2.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P3})
        (pad "4" smd roundrect (at 8.92 0 ${p.rot}) (size 2.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P4})
        (pad "5" smd roundrect (at 8.92 2.54 ${p.rot}) (size 2.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P5})
        (pad "6" smd roundrect (at 8.92 5.08 ${p.rot}) (size 2.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P6})
        (pad "7" smd roundrect (at 8.92 7.62 ${p.rot}) (size 2.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P7})
        (pad "8" smd roundrect (at -8.92 -7.62 ${180 + p.rot}) (size 2.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P8})
        (pad "9" smd roundrect (at -8.92 -5.08 ${180 + p.rot}) (size 2.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P9})
        (pad "10" smd roundrect (at -8.92 -2.539999 ${180 + p.rot}) (size 2.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P10})
        (pad "11" smd roundrect (at -8.92 0 ${180 + p.rot}) (size 2.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P11})
        (pad "12" smd roundrect (at -8.92 2.54 ${180 + p.rot}) (size 2.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P12})
        (pad "13" smd roundrect (at -8.92 5.08 ${p.rot}) (size 2.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P13})
        (pad "14" smd roundrect (at -8.92 7.62 ${p.rot}) (size 2.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P14})
    `
    const front_fabrication = `
        (property "Value" "Xiao_nRF52840_edgecut" (at 0 6.985 ${0 + p.rot}) (unlocked yes) (layer "F.Fab")  (effects (font (size 1 1) (thickness 0.15))))
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
    const front_pads_holes= `
        (descr "Footprint for Seeduino Xiao nRF52840 controllers, through hole and castellated pads")
        (pad "1" thru_hole circle (at 7.62 -7.62 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P1})
        (pad "2" thru_hole circle (at 7.62 -5.08 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P2})
        (pad "3" thru_hole circle (at 7.62 -2.54 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P3})
        (pad "4" thru_hole circle (at 7.62 0 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P4})
        (pad "5" thru_hole circle (at 7.62 2.54 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P5})
        (pad "6" thru_hole circle (at 7.62 5.08 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P6})
        (pad "7" thru_hole circle (at 7.62 7.62 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P7})
        (pad "8" thru_hole circle (at -7.62 -7.62 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P8})
        (pad "9" thru_hole roundrect (at -7.62 -5.08 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.P9})
        (pad "10" thru_hole circle (at -7.62 -2.54 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P10})
        (pad "11" thru_hole circle (at -7.62 0 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P11})
        (pad "12" thru_hole circle (at -7.62 2.54 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P12})
        (pad "13" thru_hole circle (at -7.62 5.08 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P13})
        (pad "14" thru_hole circle (at -7.62 7.62 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P14})
    `
    const back_pads_holes = `
        (descr "Footprint for Seeduino Xiao nRF52840 controllers, through hole and castellated pads")
        (pad "1" thru_hole circle (at -7.62 -7.62 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P1})
        (pad "2" thru_hole circle (at -7.62 -5.08 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P2})
        (pad "3" thru_hole circle (at -7.62 -2.54 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P3})
        (pad "4" thru_hole circle (at -7.62 0 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P4})
        (pad "5" thru_hole circle (at -7.62 2.54 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P5})
        (pad "6" thru_hole circle (at -7.62 5.08 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P6})
        (pad "7" thru_hole circle (at -7.62 7.62 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P7})
        (pad "8" thru_hole circle (at 7.62 -7.62 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P8})
        (pad "9" thru_hole roundrect (at 7.62 -5.08 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.P9})
        (pad "10" thru_hole circle (at 7.62 -2.54 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P10})
        (pad "11" thru_hole circle (at 7.62 0 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P11})
        (pad "12" thru_hole circle (at 7.62 2.54 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P12})
        (pad "13" thru_hole circle (at 7.62 5.08 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P13})
        (pad "14" thru_hole circle (at 7.62 7.62 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P14})
    `
    const back_silkscreen = `
        (fp_arc (start -9.055738 -8.816734) (mid -8.657466 -9.739979) (end -7.889996 -10.389588) (stroke (width 0.12) (type default)) (layer "B.SilkS") )
        (fp_arc (start -7.43 10.68) (mid -8.543799 10.029131) (end -9.122419 8.876145) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_arc (start 7.889998 -10.389592) (mid 8.657468 -9.739983) (end 9.05574 -8.816738) (stroke (width 0.12) (type default)) (layer "B.SilkS") )
        (fp_arc (start 9.10598 8.87321) (mid 8.522438 10.027435) (end 7.4 10.67) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_circle (center -8.47 -9.32) (end -8.17 -9.32) (stroke (width 0.12) (type solid)) (fill solid) (layer "B.SilkS") )
    `
    const back_pads = `
        (pad "1" smd roundrect (at -8.92 -7.62 ${p.rot}) (size 2.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P1})
        (pad "2" smd roundrect (at -8.92 -5.08 ${p.rot}) (size 2.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P2})
        (pad "3" smd roundrect (at -8.92 -2.54 ${p.rot}) (size 2.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P3})
        (pad "4" smd roundrect (at -8.92 0 ${p.rot}) (size 2.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P4})
        (pad "5" smd roundrect (at -8.92 2.54 ${p.rot}) (size 2.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P5})
        (pad "6" smd roundrect (at -8.92 5.08 ${p.rot}) (size 2.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P6})
        (pad "7" smd roundrect (at -8.92 7.62 ${p.rot}) (size 2.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P7})
        (pad "8" smd roundrect (at 8.92 -7.62 ${180 + p.rot}) (size 2.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P8})
        (pad "9" smd roundrect (at 8.92 -5.08 ${180 + p.rot}) (size 2.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P9})
        (pad "10" smd roundrect (at 8.92 -2.539999 ${180 + p.rot}) (size 2.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P10})
        (pad "11" smd roundrect (at 8.92 0 ${180 + p.rot}) (size 2.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P11})
        (pad "12" smd roundrect (at 8.92 2.54 ${180 + p.rot}) (size 2.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P12})
        (pad "13" smd roundrect (at 8.92 5.08 ${p.rot}) (size 2.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P13})
        (pad "14" smd roundrect (at 8.92 7.62 ${p.rot}) (size 2.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P14})
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
        (fp_line (start -7.62 9.678) (end -7.619768 -10.410053) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_line (start -6.62 10.678) (end 6.62 10.678) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_line (start 7.62 9.678) (end 7.619768 -10.410053) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start -8.119768 -10.910053) (mid -7.766218 -10.763603) (end -7.619768 -10.410053) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start -6.62 10.678) (mid -7.327107 10.385107) (end -7.62 9.678) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start 7.619768 -10.410053) (mid 7.766216 -10.763605) (end 8.119768 -10.910053) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start 7.62 9.678) (mid 7.327107 10.385107) (end 6.62 10.678) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
    `
    const user_drawing = `
    `
    const user_comments = `
        (fp_rect (start -8.889999 -10.43) (end 8.890001 10.4775) (stroke (width 0.2) (type solid)) (fill none) (layer "Cmts.User") )
        (fp_rect (start -4.500879 -11.98626) (end 4.500881 -4.6355) (stroke (width 0.1) (type default)) (fill none) (layer "Cmts.User") )
        (fp_text user "USB" (at -0.000001 -10.6425 ${0 + p.rot}) (layer "Cmts.User")  (effects (font (size 1 1) (thickness 0.15)) (justify bottom)))
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
        (model "\${KICAD8_3RD_PARTY}/3dmodels/com_github_ebastler_marbastlib/seeeduino_xiao_rp2040.step" (offset (xyz 0 0 1.2)) (scale (xyz 1 1 1)) (${rotate}))
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
        final += front_pads;
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
