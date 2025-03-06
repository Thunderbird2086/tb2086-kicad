module.exports = {
  params: {
    designator: 'MCU',
    side: 'F',
    show_3d: false,
    GP00: {type: 'net', value: 'GP00'},
    GP01: {type: 'net', value: 'GP01'},
    GP02: {type: 'net', value: 'GP02'},
    GP03: {type: 'net', value: 'GP03'},
    GP04: {type: 'net', value: 'GP04'},
    GP05: {type: 'net', value: 'GP05'},
    GP06: {type: 'net', value: 'GP06'},
    GP07: {type: 'net', value: 'GP07'},
    GP08: {type: 'net', value: 'GP08'},
    GP09: {type: 'net', value: 'GP09'},
    GP10: {type: 'net', value: 'GP10'},
    GP11: {type: 'net', value: 'GP11'},
    GP12: {type: 'net', value: 'GP12'},
    GP13: {type: 'net', value: 'GP13'},
    GP14: {type: 'net', value: 'GP14'},
    GP15: {type: 'net', value: 'GP15'},
    GP26: {type: 'net', value: 'GP26'},
    GP27: {type: 'net', value: 'GP27'},
    GP28: {type: 'net', value: 'GP28'},
    GP29: {type: 'net', value: 'GP29'},
    V3V3: {type: 'net', value: 'V3V3'},
    V5V: {type: 'net', value: 'V5V'},
    GND: {type: 'net', value: 'GND'},
  },
  body: p => {
    let fp_name="TB2086_MISC:RP2040-Zero"
    if (p.side == "B") {
        fp_name += "_flip";
        mirror = "(justify mirror)"
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (property "Reference" "${p.ref}" (at 0 -2.75 ${0 + p.rot}) (unlocked yes) (layer "${p.side}.SilkS") ${p.ref_hide}  (effects (font (size 1 1) (thickness 0.15)) ${mirror}))
        (attr through_hole)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (property "Value" "RP2040-Zero" (at 0 -0.75 ${0 + p.rot}) (unlocked yes) (layer "F.SilkS")  (effects (font (size 1 1) (thickness 0.15))))
        (fp_line (start -9 -11.75) (end -9 11.75) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -9 11.75) (end 9 11.75) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start 9 -11.75) (end -9 -11.75) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start 9 11.75) (end 9 -11.75) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
    `
    const front_pads = `
        (pad "1" thru_hole roundrect (at 7.62 -10.16 ${p.rot}) (size 2.6 1.6) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP00})
        (pad "2" thru_hole roundrect (at 7.62 -7.62 ${p.rot}) (size 2.6 1.6) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP01})
        (pad "3" thru_hole roundrect (at 7.62 -5.08 ${p.rot}) (size 2.6 1.6) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP02})
        (pad "4" thru_hole roundrect (at 7.62 -2.54 ${p.rot}) (size 2.6 1.6) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP03})
        (pad "5" thru_hole roundrect (at 7.62 0 ${p.rot}) (size 2.6 1.6) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP04})
        (pad "6" thru_hole roundrect (at 7.62 2.54 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP05})
        (pad "7" thru_hole roundrect (at 7.62 5.08 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP06})
        (pad "8" thru_hole roundrect (at 7.62 7.62 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP07})
        (pad "9" thru_hole roundrect (at 7.62 10.16 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP08})
        (pad "10" thru_hole roundrect (at 5.08 10.37 ${p.rot}) (size 1.6 2.6) (drill 0.8 (offset 0 0.6)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP09})
        (pad "11" thru_hole roundrect (at 2.54 10.37 ${p.rot}) (size 1.5748 2.6) (drill 0.8 (offset 0 0.6)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP10})
        (pad "13" thru_hole roundrect (at -2.54 10.37 ${p.rot}) (size 1.5748 2.6) (drill 0.8 (offset 0 0.6)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP12})
        (pad "14" thru_hole roundrect (at -5.08 10.37 ${p.rot}) (size 1.5748 2.6) (drill 0.8 (offset 0 0.6)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP13})
        (pad "15" thru_hole roundrect (at -7.62 10.16 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP14})
        (pad "16" thru_hole roundrect (at -7.62 7.62 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP15})
        (pad "17" thru_hole roundrect (at -7.62 5.08 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP26})
        (pad "18" thru_hole roundrect (at -7.62 2.54 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP27})
        (pad "19" thru_hole roundrect (at -7.62 -10.16 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP28})
        (pad "20" thru_hole roundrect (at -7.62 -7.62 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP29})
        (pad "21" thru_hole roundrect (at -7.62 -5.08 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.V3V3})
        (pad "22" thru_hole roundrect (at -7.62 0 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.V5V})
        (pad "23" thru_hole roundrect (at -7.62 -2.54 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GND})
    `
    const front_fabrication = `
        (property "Footprint" "" (at -10.16 12.7 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at -10.16 12.7 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at -10.16 12.7 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_line (start -4.33 -12.75) (end -4.33 -11.75) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -4.33 -12.75) (end 4.3 -12.75) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 4.3 -12.75) (end 4.3 -11.75) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_text user "\${REFERENCE}" (at 0 1.25 ${0 + p.rot}) (unlocked yes) (layer "F.Fab")  (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -9 -11.75) (end 9 -11.75) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -9 11.75) (end -9 -11.75) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 9 -11.75) (end 9 11.75) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 9 11.75) (end -9 11.75) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
    `
    const front_paste = `
    `
    const pads = `
        (pad "12" thru_hole roundrect (at 0 10.37 ${p.rot}) (size 1.5748 2.6) (drill 0.8 (offset 0 0.6)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP11})
    `
    const back_silkscreen = `
        (property "Value" "RP2040-Zero_flip" (at 0 -0.75 ${0 + p.rot}) (unlocked yes) (layer "B.SilkS")  (effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
        (fp_line (start -9 -11.75) (end 9 -11.75) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start -9 11.75) (end -9 -11.75) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 9 -11.75) (end 9 11.75) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 9 11.75) (end -9 11.75) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
    `
    const back_pads = `
        (pad "1" thru_hole roundrect (at -7.62 -10.16 ${p.rot}) (size 2.6 1.6) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP00})
        (pad "2" thru_hole roundrect (at -7.62 -7.62 ${p.rot}) (size 2.6 1.6) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP01})
        (pad "3" thru_hole roundrect (at -7.62 -5.08 ${p.rot}) (size 2.6 1.6) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP02})
        (pad "4" thru_hole roundrect (at -7.62 -2.54 ${p.rot}) (size 2.6 1.6) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP03})
        (pad "5" thru_hole roundrect (at -7.62 0 ${p.rot}) (size 2.6 1.6) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP04})
        (pad "6" thru_hole roundrect (at -7.62 2.54 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP05})
        (pad "7" thru_hole roundrect (at -7.62 5.08 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP06})
        (pad "8" thru_hole roundrect (at -7.62 7.62 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP07})
        (pad "9" thru_hole roundrect (at -7.62 10.16 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP08})
        (pad "10" thru_hole roundrect (at -5.08 10.37 ${p.rot}) (size 1.6 2.6) (drill 0.8 (offset 0 0.6)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP09})
        (pad "11" thru_hole roundrect (at -2.54 10.37 ${p.rot}) (size 1.5748 2.6) (drill 0.8 (offset 0 0.6)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP10})
        (pad "13" thru_hole roundrect (at 2.54 10.37 ${p.rot}) (size 1.5748 2.6) (drill 0.8 (offset 0 0.6)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP12})
        (pad "14" thru_hole roundrect (at 5.08 10.37 ${p.rot}) (size 1.5748 2.6) (drill 0.8 (offset 0 0.6)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP13})
        (pad "15" thru_hole roundrect (at 7.62 10.16 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP14})
        (pad "16" thru_hole roundrect (at 7.62 7.62 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP15})
        (pad "17" thru_hole roundrect (at 7.62 5.08 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP26})
        (pad "18" thru_hole roundrect (at 7.62 2.54 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP27})
        (pad "19" thru_hole roundrect (at 7.62 -10.16 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP28})
        (pad "20" thru_hole roundrect (at 7.62 -7.62 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GP29})
        (pad "21" thru_hole roundrect (at 7.62 -5.08 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.V3V3})
        (pad "22" thru_hole roundrect (at 7.62 0 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.V5V})
        (pad "23" thru_hole roundrect (at 7.62 -2.54 ${p.rot}) (size 2.6 1.6002) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GND})
    `
    const back_fabrication = `
        (property "Footprint" "" (at 10.16 12.7 ${0 + p.rot}) (layer "B.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify mirror)))
        (property "Datasheet" "" (at 10.16 12.7 ${0 + p.rot}) (layer "B.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify mirror)))
        (property "Description" "" (at 10.16 12.7 ${0 + p.rot}) (layer "B.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify mirror)))
        (fp_line (start -4.3 -12.75) (end -4.3 -11.75) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 4.33 -12.75) (end -4.3 -12.75) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 4.33 -12.75) (end 4.33 -11.75) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_text user "\${REFERENCE}" (at 0 1.25 ${0 + p.rot}) (unlocked yes) (layer "B.Fab")  (effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
    `
    const back_mask = `
    `
    const back_courtyard = `
        (fp_line (start -9 -11.75) (end -9 11.75) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -9 11.75) (end 9 11.75) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 9 -11.75) (end -9 -11.75) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 9 11.75) (end 9 -11.75) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
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
    let offset = "(xyz 0 0 0)"
    let rotate = "(xyz -90 0 0)"
    if (p.side == "B") {
        offset = "(xyz 0 0 -1.6)"
        rotate = "(xyz -90 180 0)"
    }

    const model = `
        (model "\${TB2086_GLOBAL}/packages3D/RP2040-ZERO-WAVESHARE.step" (offset ${offset}) (scale (xyz 1 1 1)) (rotate ${rotate}))
    `
    const standard_closing = `
            )
    `
    let final = standard_opening;

    if (p.side == "F") {
        final += front_silkscreen;
        final += front_pads;
        final += front_fabrication;
        final += front_mask;
        final += front_courtyard;
        final += front_paste;
    }

    final += pads;

    if (p.side == "B") {
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
