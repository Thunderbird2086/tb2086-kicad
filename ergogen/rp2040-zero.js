module.exports = {
  params: {
    designator: 'MCU',
    side: 'F',
    edgecut: false,
    show_3d: false,
    v3v3: {type: 'net', value: 'v3v3'},
    v5v0: {type: 'net', value: 'v5v0'},
    GND: {type: 'net', value: 'GND'},
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
  },
  body: p => {
    let fp_name_tail = ``
    let idx = 0

    if (p.edgecut) {
        fp_name_tail += `_edgecut`
        idx = 1
    }

    const standard_opening = `(
         footprint "TB2086_MCU:RP2040-Zero${fp_name_tail}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "${p.side}.Cu")
        (property "Reference" "${p.ref}" (at 0 -2.75 ${0 + p.rot}) (unlocked yes) (layer "F.SilkS") ${p.ref_hide}  (effects (font (size 1 1) (thickness 0.15))))
        (attr through_hole)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = []
    front_silkscreen[0] = `
        (property "Value" "RP2040-Zero" (at 0 -0.75 ${0 + p.rot}) (unlocked yes) (layer "F.SilkS") (hide yes)  (effects (font (size 1 1) (thickness 0.15))))
        (fp_line (start -8.000001 -11.950001) (end 8.000001 -11.950001) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_line (start -8.000001 11.950001) (end -6.2 11.95) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_line (start 8.000001 11.950001) (end 6.2 11.95) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_arc (start -9.107693 -11.211539) (mid -8.665641 -11.748461) (end -8.000001 -11.950001) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_arc (start -8.000001 11.950001) (mid -8.665641 11.748461) (end -9.107693 11.211539) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_arc (start 8.000001 -11.950001) (mid 8.665641 -11.748461) (end 9.107693 -11.211539) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_arc (start 9.107693 11.211539) (mid 8.665641 11.748461) (end 8.000001 11.950001) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
    `
    front_silkscreen[1] = `
        (property "Value" "RP2040-Zero_flip_edgecut_s" (at 0 -0.75 ${0 + p.rot}) (unlocked yes) (layer "F.SilkS") (hide yes)  (effects (font (size 1 1) (thickness 0.15))))
        (fp_line (start -8.000001 11.950001) (end -6.2 11.95) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_line (start -5.000001 -11.950001) (end -8.000001 -11.950001) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_line (start 8.000001 -11.950001) (end 5.000001 -11.950001) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_line (start 8.000001 11.950001) (end 6.2 11.95) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_arc (start -9.107693 -11.211539) (mid -8.665641 -11.748461) (end -8.000001 -11.950001) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_arc (start -8.000001 11.950001) (mid -8.665641 11.748461) (end -9.107693 11.211539) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_arc (start 8.000001 -11.950001) (mid 8.665641 -11.748461) (end 9.107693 -11.211539) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_arc (start 9.107693 11.211539) (mid 8.665641 11.748461) (end 8.000001 11.950001) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
    `

    const front_pads = []
    front_pads[0] = `
        (pad "1" smd roundrect (at -8.92 -10.16 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.v5v0})
        (pad "2" smd roundrect (at -8.92 -7.62 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GND})
        (pad "3" smd roundrect (at -8.92 -5.08 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.v3v3})
        (pad "4" smd roundrect (at -8.92 -2.54 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP29})
        (pad "5" smd roundrect (at -8.92 0 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP28})
        (pad "6" smd roundrect (at -8.92 2.54 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP27})
        (pad "7" smd roundrect (at -8.92 5.08 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP26})
        (pad "8" smd roundrect (at -8.92 7.62 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP15})
        (pad "9" smd roundrect (at -8.92 10.16 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP14})
        (pad "10" smd roundrect (at 8.92 -10.16 ${180 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP00})
        (pad "11" smd roundrect (at 8.92 -7.62 ${180 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP01})
        (pad "12" smd roundrect (at 8.92 -5.08 ${180 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP02})
        (pad "13" smd roundrect (at 8.92 -2.54 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP03})
        (pad "14" smd roundrect (at 8.92 0 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP04})
        (pad "15" smd roundrect (at 8.92 2.54 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP05})
        (pad "16" smd roundrect (at 8.92 5.08 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP06})
        (pad "17" smd roundrect (at 8.92 7.62 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP07})
        (pad "18" smd roundrect (at 8.92 10.16 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP08})
        (pad "19" smd roundrect (at -5.08 11.46 ${270 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP13})
        (pad "20" smd roundrect (at -2.54 11.46 ${270 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP12})
        (pad "21" smd roundrect (at 0 11.46 ${270 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP11})
        (pad "22" smd roundrect (at 2.54 11.46 ${270 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP10})
        (pad "23" smd roundrect (at 5.08 11.46 ${270 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP09})
    `
    front_pads[1] = `
        (pad "1" smd roundrect (at 8.92 -10.16 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.v5v0})
        (pad "2" smd roundrect (at 8.92 -7.62 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GND})
        (pad "3" smd roundrect (at 8.92 -5.08 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.v3v3})
        (pad "4" smd roundrect (at 8.92 -2.54 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP29})
        (pad "5" smd roundrect (at 8.92 0 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP28})
        (pad "6" smd roundrect (at 8.92 2.54 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP27})
        (pad "7" smd roundrect (at 8.92 5.08 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP26})
        (pad "8" smd roundrect (at 8.92 7.62 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP15})
        (pad "9" smd roundrect (at 8.92 10.16 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP14})
        (pad "10" smd roundrect (at -8.92 -10.16 ${180 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP00})
        (pad "11" smd roundrect (at -8.92 -7.62 ${180 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP01})
        (pad "12" smd roundrect (at -8.92 -5.08 ${180 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP02})
        (pad "13" smd roundrect (at -8.92 -2.54 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP03})
        (pad "14" smd roundrect (at -8.92 0 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP04})
        (pad "15" smd roundrect (at -8.92 2.54 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP05})
        (pad "16" smd roundrect (at -8.92 5.08 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP06})
        (pad "17" smd roundrect (at -8.92 7.62 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP07})
        (pad "18" smd roundrect (at -8.92 10.16 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP08})
        (pad "19" smd roundrect (at 5.08 11.46 ${90 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP13})
        (pad "20" smd roundrect (at 2.54 11.46 ${90 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP12})
        (pad "21" smd roundrect (at 0 11.46 ${90 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP11})
        (pad "22" smd roundrect (at -2.54 11.46 ${90 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP10})
        (pad "23" smd roundrect (at -5.08 11.46 ${90 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.GP09})
    `

    const front_fabrication = `
        (property "Footprint" "" (at -10.16 12.7 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at -10.16 12.7 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at -10.16 12.7 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
    `
    const front_paste = `
    `
    const pads = []
    pads[0] = `
        (pad "1" thru_hole circle (at -7.62 -10.16 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.v5v0})
        (pad "2" thru_hole roundrect (at -7.62 -7.62 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GND})
        (pad "3" thru_hole circle (at -7.62 -5.08 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.v3v3})
        (pad "4" thru_hole circle (at -7.62 -2.54 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP29})
        (pad "5" thru_hole circle (at -7.62 0 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP28})
        (pad "6" thru_hole circle (at -7.62 2.54 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP27})
        (pad "7" thru_hole circle (at -7.62 5.08 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP26})
        (pad "8" thru_hole circle (at -7.62 7.62 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP15})
        (pad "9" thru_hole circle (at -7.62 10.16 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP14})
        (pad "10" thru_hole circle (at 7.62 -10.16 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP00})
        (pad "11" thru_hole circle (at 7.62 -7.62 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP01})
        (pad "12" thru_hole circle (at 7.62 -5.08 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP02})
        (pad "13" thru_hole circle (at 7.62 -2.54 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP03})
        (pad "14" thru_hole circle (at 7.62 0 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP04})
        (pad "15" thru_hole circle (at 7.62 2.54 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP05})
        (pad "16" thru_hole circle (at 7.62 5.08 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP06})
        (pad "17" thru_hole circle (at 7.62 7.62 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP07})
        (pad "18" thru_hole circle (at 7.62 10.16 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP08})
        (pad "19" thru_hole circle (at -5.08 10.16 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP13})
        (pad "20" thru_hole circle (at -2.54 10.16 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP12})
        (pad "21" thru_hole circle (at 0 10.16 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP11})
        (pad "22" thru_hole circle (at 2.54 10.16 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP10})
        (pad "23" thru_hole circle (at 5.08 10.16 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP09})
    `
    pads[1] = `
        (pad "1" thru_hole circle (at 7.62 -10.16 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.v5v0})
        (pad "2" thru_hole roundrect (at 7.62 -7.62 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.GND})
        (pad "3" thru_hole circle (at 7.62 -5.08 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.v3v3})
        (pad "4" thru_hole circle (at 7.62 -2.54 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP29})
        (pad "5" thru_hole circle (at 7.62 0 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP28})
        (pad "6" thru_hole circle (at 7.62 2.54 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP27})
        (pad "7" thru_hole circle (at 7.62 5.08 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP26})
        (pad "8" thru_hole circle (at 7.62 7.62 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP15})
        (pad "9" thru_hole circle (at 7.62 10.16 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP14})
        (pad "10" thru_hole circle (at -7.62 -10.16 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP00})
        (pad "11" thru_hole circle (at -7.62 -7.62 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP01})
        (pad "12" thru_hole circle (at -7.62 -5.08 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP02})
        (pad "13" thru_hole circle (at -7.62 -2.54 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP03})
        (pad "14" thru_hole circle (at -7.62 0 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP04})
        (pad "15" thru_hole circle (at -7.62 2.54 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP05})
        (pad "16" thru_hole circle (at -7.62 5.08 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP06})
        (pad "17" thru_hole circle (at -7.62 7.62 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP07})
        (pad "18" thru_hole circle (at -7.62 10.16 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP08})
        (pad "19" thru_hole circle (at 5.08 10.16 ${90 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP13})
        (pad "20" thru_hole circle (at 2.54 10.16 ${90 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP12})
        (pad "21" thru_hole circle (at 0 10.16 ${90 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP11})
        (pad "22" thru_hole circle (at -2.54 10.16 ${90 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP10})
        (pad "23" thru_hole circle (at -5.08 10.16 ${90 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GP09})
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

    const edge_cuts = []
    edge_cuts[0] = `
        (fp_line (start -6.5 7.5) (end -6.5 -10.75) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_line (start 5.5 -11.75) (end -5.5 -11.75) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_line (start 5.5 8.5) (end -5.5 8.5) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_line (start 6.5 -10.75) (end 6.5 7.5) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start -6.5 -10.75) (mid -6.207107 -11.457107) (end -5.5 -11.75) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start -5.5 8.5) (mid -6.207107 8.207107) (end -6.5 7.5) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start 5.5 -11.75) (mid 6.207107 -11.457107) (end 6.5 -10.75) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start 6.5 7.5) (mid 6.207107 8.207107) (end 5.5 8.5) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
    `
    edge_cuts[1] = `
        (fp_line (start -6.5 7.5) (end -6.5 -8.75) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_line (start -5.500232 -9.749946) (end -5.057768 -9.750053) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_line (start -4.557768 -10.250053) (end -4.557768 -11.950053) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_line (start 4.557768 -10.250053) (end 4.557768 -11.950053) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_line (start 5.5 8.5) (end -5.5 8.5) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_line (start 5.500232 -9.749946) (end 5.057768 -9.750053) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_line (start 6.5 -8.75) (end 6.5 7.5) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start -6.5 -8.75) (mid -6.207107 -9.457107) (end -5.5 -9.75) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start -5.5 8.5) (mid -6.207107 8.207107) (end -6.5 7.5) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start -5.057768 -12.450053) (mid -4.704217 -12.303604) (end -4.557768 -11.950053) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start -4.557768 -10.250053) (mid -4.704215 -9.8965) (end -5.057768 -9.750053) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start 4.557768 -11.950053) (mid 4.704218 -12.303602) (end 5.057768 -12.450053) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start 5.057768 -9.750053) (mid 4.704217 -9.8965) (end 4.557768 -10.250053) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start 5.5 -9.75) (mid 6.207107 -9.457107) (end 6.5 -8.75) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start 6.5 7.5) (mid 6.207107 8.207107) (end 5.5 8.5) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
    `


    const user_drawing = `
    `
    const user_comments = `
        (fp_line (start -9 10.75) (end -9 -10.75) (stroke (width 0.2) (type default)) (layer "Cmts.User") )
        (fp_line (start -8 -11.75) (end 8 -11.75) (stroke (width 0.2) (type default)) (layer "Cmts.User") )
        (fp_line (start 8 11.75) (end -8 11.75) (stroke (width 0.2) (type default)) (layer "Cmts.User") )
        (fp_line (start 9 -10.75) (end 9 10.75) (stroke (width 0.2) (type default)) (layer "Cmts.User") )
        (fp_rect (start -3.55 -13.45) (end 3.55 -8.37) (stroke (width 0.1) (type default)) (fill none) (layer "Cmts.User") )
        (fp_arc (start -9 -10.75) (mid -8.707107 -11.457107) (end -8 -11.75) (stroke (width 0.2) (type default)) (layer "Cmts.User") )
        (fp_arc (start -8 11.75) (mid -8.707107 11.457107) (end -9 10.75) (stroke (width 0.2) (type default)) (layer "Cmts.User") )
        (fp_arc (start 8 -11.75) (mid 8.707107 -11.457107) (end 9 -10.75) (stroke (width 0.2) (type default)) (layer "Cmts.User") )
        (fp_arc (start 9 10.75) (mid 8.707107 11.457107) (end 8 11.75) (stroke (width 0.2) (type default)) (layer "Cmts.User") )
        (fp_text user "USB" (at 0 -10.37 ${0 + p.rot}) (layer "Cmts.User")  (effects (font (size 1 1) (thickness 0.15)) (justify bottom)))
    `
    const user_eco1 = `
    `
    const user_eco2 = `
    `

    const model = []
    model[0] = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/RP2040-ZERO-WAVESHARE.step" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz -90 0 0)))
    `
    model[1] = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/RP2040-ZERO-WAVESHARE.step" (offset (xyz 0 0 1.1)) (scale (xyz 1 1 1)) (rotate (xyz -90 180 0)))
    `
    const standard_closing = `
            )
    `
    let final = standard_opening;

    final += front_silkscreen[idx];
    final += front_pads[idx];

    final += front_fabrication;
    final += front_mask;
    final += front_courtyard;
    final += front_paste;

    final += pads[idx];
    final += back_silkscreen;
    final += back_pads;

    final += back_fabrication;
    final += back_mask;
    final += back_courtyard;
    final += back_paste;

    final += edge_cuts[idx];

    final += user_drawing;
    final += user_comments;
    final += user_eco1;
    final += user_eco2;

    if (p.show_3d) {
        final += model[idx];
    }

    final += standard_closing;

    return final
  }
}
