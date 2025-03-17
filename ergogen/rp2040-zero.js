module.exports = {
  params: {
    designator: 'MCU',
    flip: false,
    edgecut: false,
    show_3d: false,
    P18: {type: 'net', value: 'P18'},
    P20: {type: 'net', value: 'P20'},
    P3: {type: 'net', value: 'P3'},
    P7: {type: 'net', value: 'P7'},
    P1: {type: 'net', value: 'P1'},
    P9: {type: 'net', value: 'P9'},
    P19: {type: 'net', value: 'P19'},
    P5: {type: 'net', value: 'P5'},
    P12: {type: 'net', value: 'P12'},
    P22: {type: 'net', value: 'P22'},
    P16: {type: 'net', value: 'P16'},
    P21: {type: 'net', value: 'P21'},
    P14: {type: 'net', value: 'P14'},
    P23: {type: 'net', value: 'P23'},
    P2: {type: 'net', value: 'P2'},
    P8: {type: 'net', value: 'P8'},
    P6: {type: 'net', value: 'P6'},
    P11: {type: 'net', value: 'P11'},
    P15: {type: 'net', value: 'P15'},
    P17: {type: 'net', value: 'P17'},
    P4: {type: 'net', value: 'P4'},
    P10: {type: 'net', value: 'P10'},
    P13: {type: 'net', value: 'P13'},
  },
  body: p => {
    let fp_name_tail = ``
    let idx = 0

    let offset_3d = `(offset (xyz 0 0 0))`
    let rot_3d = `(rotate (xyz -90 0 0))`

    if (p.flip) {
        fp_name_tail += `_flip`
        idx = 1
        offset_3d = `(offset (xyz 0 0 -1.6))`
        rot_3d = `(rotate (xyz -90 180 0))`
    }
    if (p.edgecut) {
        fp_name_tail += `_edgecut`
        idx += 2
        if (p.flip) {
            offset_3d = `(offset (xyz 0 0 1.6))`
        } else {
            offset_3d = `(offset (xyz 0 0 -3.2))`
        }
    }

    const standard_opening = `(
         footprint "RP2040-Zero${fp_name_tail}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (property "Reference" "${p.ref}" (at 0 -2.75 ${0 + p.rot}) (unlocked yes) (layer "F.SilkS") ${p.ref_hide}  (effects (font (size 1 1) (thickness 0.15))))
        (attr through_hole)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = []
    front_silkscreen[0] = `
        (fp_line (start -8.000001 -11.950001) (end 8.000001 -11.950001) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_line (start -8.000001 11.950001) (end -6.2 11.95) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_line (start 8.000001 11.950001) (end 6.2 11.95) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_arc (start -9.107693 -11.211539) (mid -8.665641 -11.748461) (end -8.000001 -11.950001) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_arc (start -8.000001 11.950001) (mid -8.665641 11.748461) (end -9.107693 11.211539) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_arc (start 8.000001 -11.950001) (mid 8.665641 -11.748461) (end 9.107693 -11.211539) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_arc (start 9.107693 11.211539) (mid 8.665641 11.748461) (end 8.000001 11.950001) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
    `
    front_silkscreen[1] = ``
    front_silkscreen[2] = ``
    front_silkscreen[3] = `
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
        (pad "1" smd roundrect (at -8.92 -10.16 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P1})
        (pad "2" smd roundrect (at -8.92 -7.62 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P2})
        (pad "3" smd roundrect (at -8.92 -5.08 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P3})
        (pad "4" smd roundrect (at -8.92 -2.54 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P4})
        (pad "5" smd roundrect (at -8.92 0 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P5})
        (pad "6" smd roundrect (at -8.92 2.54 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P6})
        (pad "7" smd roundrect (at -8.92 5.08 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P7})
        (pad "8" smd roundrect (at -8.92 7.62 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P8})
        (pad "9" smd roundrect (at -8.92 10.16 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P9})
        (pad "10" smd roundrect (at 8.92 -10.16 ${180 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P10})
        (pad "11" smd roundrect (at 8.92 -7.62 ${180 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P11})
        (pad "12" smd roundrect (at 8.92 -5.08 ${180 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P12})
        (pad "13" smd roundrect (at 8.92 -2.54 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P13})
        (pad "14" smd roundrect (at 8.92 0 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P14})
        (pad "15" smd roundrect (at 8.92 2.54 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P15})
        (pad "16" smd roundrect (at 8.92 5.08 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P16})
        (pad "17" smd roundrect (at 8.92 7.62 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P17})
        (pad "18" smd roundrect (at 8.92 10.16 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P18})
        (pad "19" smd roundrect (at -5.08 11.46 ${270 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P19})
        (pad "20" smd roundrect (at -2.54 11.46 ${270 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P20})
        (pad "21" smd roundrect (at 0 11.46 ${270 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P21})
        (pad "22" smd roundrect (at 2.54 11.46 ${270 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P22})
        (pad "23" smd roundrect (at 5.08 11.46 ${270 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P23})
    `
    front_pads[1] = []
    front_pads[2] = []
    front_pads[3] = `
        (pad "1" smd roundrect (at 8.92 -10.16 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P1})
        (pad "2" smd roundrect (at 8.92 -7.62 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P2})
        (pad "3" smd roundrect (at 8.92 -5.08 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P3})
        (pad "4" smd roundrect (at 8.92 -2.54 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P4})
        (pad "5" smd roundrect (at 8.92 0 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P5})
        (pad "6" smd roundrect (at 8.92 2.54 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P6})
        (pad "7" smd roundrect (at 8.92 5.08 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P7})
        (pad "8" smd roundrect (at 8.92 7.62 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P8})
        (pad "9" smd roundrect (at 8.92 10.16 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P9})
        (pad "10" smd roundrect (at -8.92 -10.16 ${180 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P10})
        (pad "11" smd roundrect (at -8.92 -7.62 ${180 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P11})
        (pad "12" smd roundrect (at -8.92 -5.08 ${180 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P12})
        (pad "13" smd roundrect (at -8.92 -2.54 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P13})
        (pad "14" smd roundrect (at -8.92 0 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P14})
        (pad "15" smd roundrect (at -8.92 2.54 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P15})
        (pad "16" smd roundrect (at -8.92 5.08 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P16})
        (pad "17" smd roundrect (at -8.92 7.62 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P17})
        (pad "18" smd roundrect (at -8.92 10.16 ${p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P18})
        (pad "19" smd roundrect (at 5.08 11.46 ${90 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P19})
        (pad "20" smd roundrect (at 2.54 11.46 ${90 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P20})
        (pad "21" smd roundrect (at 0 11.46 ${90 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P21})
        (pad "22" smd roundrect (at -2.54 11.46 ${90 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P22})
        (pad "23" smd roundrect (at -5.08 11.46 ${90 + p.rot}) (size 3.5 1.8) (layers "F.Cu" "F.Mask") (roundrect_rratio 0.25)  ${p.P23})
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
        (pad "1" thru_hole circle (at -7.62 -10.16 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P1})
        (pad "2" thru_hole roundrect (at -7.62 -7.62 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.P2})
        (pad "3" thru_hole circle (at -7.62 -5.08 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P3})
        (pad "4" thru_hole circle (at -7.62 -2.54 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P4})
        (pad "5" thru_hole circle (at -7.62 0 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P5})
        (pad "6" thru_hole circle (at -7.62 2.54 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P6})
        (pad "7" thru_hole circle (at -7.62 5.08 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P7})
        (pad "8" thru_hole circle (at -7.62 7.62 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P8})
        (pad "9" thru_hole circle (at -7.62 10.16 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P9})
        (pad "10" thru_hole circle (at 7.62 -10.16 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P10})
        (pad "11" thru_hole circle (at 7.62 -7.62 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P11})
        (pad "12" thru_hole circle (at 7.62 -5.08 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P12})
        (pad "13" thru_hole circle (at 7.62 -2.54 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P13})
        (pad "14" thru_hole circle (at 7.62 0 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P14})
        (pad "15" thru_hole circle (at 7.62 2.54 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P15})
        (pad "16" thru_hole circle (at 7.62 5.08 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P16})
        (pad "17" thru_hole circle (at 7.62 7.62 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P17})
        (pad "18" thru_hole circle (at 7.62 10.16 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P18})
        (pad "19" thru_hole circle (at -5.08 10.16 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P19})
        (pad "20" thru_hole circle (at -2.54 10.16 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P20})
        (pad "21" thru_hole circle (at 0 10.16 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P21})
        (pad "22" thru_hole circle (at 2.54 10.16 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P22})
        (pad "23" thru_hole circle (at 5.08 10.16 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P23})
    `
    pads[1] = `
        (pad "1" thru_hole circle (at 7.62 -10.16 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P1})
        (pad "2" thru_hole roundrect (at 7.62 -7.62 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25)  ${p.P2})
        (pad "3" thru_hole circle (at 7.62 -5.08 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P3})
        (pad "4" thru_hole circle (at 7.62 -2.54 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P4})
        (pad "5" thru_hole circle (at 7.62 0 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P5})
        (pad "6" thru_hole circle (at 7.62 2.54 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P6})
        (pad "7" thru_hole circle (at 7.62 5.08 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P7})
        (pad "8" thru_hole circle (at 7.62 7.62 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P8})
        (pad "9" thru_hole circle (at 7.62 10.16 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P9})
        (pad "10" thru_hole circle (at -7.62 -10.16 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P10})
        (pad "11" thru_hole circle (at -7.62 -7.62 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P11})
        (pad "12" thru_hole circle (at -7.62 -5.08 ${180 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P12})
        (pad "13" thru_hole circle (at -7.62 -2.54 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P13})
        (pad "14" thru_hole circle (at -7.62 0 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P14})
        (pad "15" thru_hole circle (at -7.62 2.54 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P15})
        (pad "16" thru_hole circle (at -7.62 5.08 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P16})
        (pad "17" thru_hole circle (at -7.62 7.62 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P17})
        (pad "18" thru_hole circle (at -7.62 10.16 ${p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P18})
        (pad "19" thru_hole circle (at 5.08 10.16 ${90 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P19})
        (pad "20" thru_hole circle (at 2.54 10.16 ${90 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P20})
        (pad "21" thru_hole circle (at 0 10.16 ${90 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P21})
        (pad "22" thru_hole circle (at -2.54 10.16 ${90 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P22})
        (pad "23" thru_hole circle (at -5.08 10.16 ${90 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P23})
    `
    pads[2] = pads[0]
    pads[3] = pads[1]

    const back_silkscreen = []
    back_silkscreen[0] = ``
    back_silkscreen[1] = `
        (fp_line (start -8.000001 11.950001) (end -6.2 11.95) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_line (start 8.000001 -11.950001) (end -8.000001 -11.950001) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_line (start 8.000001 11.950001) (end 6.2 11.95) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_arc (start -9.107693 -11.211539) (mid -8.665641 -11.748461) (end -8.000001 -11.950001) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_arc (start -8.000001 11.950001) (mid -8.665641 11.748461) (end -9.107693 11.211539) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_arc (start 8.000001 -11.950001) (mid 8.665641 -11.748461) (end 9.107693 -11.211539) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_arc (start 9.107693 11.211539) (mid 8.665641 11.748461) (end 8.000001 11.950001) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
    `
    back_silkscreen[2] = `
        (fp_line (start -8.000001 11.950001) (end -6.2 11.95) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_line (start -5 -11.95) (end -8 -11.95) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_line (start 8.000001 -11.950001) (end 5.000001 -11.950001) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_line (start 8.000001 11.950001) (end 6.2 11.95) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_arc (start -9.107693 -11.211539) (mid -8.665641 -11.748461) (end -8.000001 -11.950001) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_arc (start -8.000001 11.950001) (mid -8.665641 11.748461) (end -9.107693 11.211539) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_arc (start 8.000001 -11.950001) (mid 8.665641 -11.748461) (end 9.107693 -11.211539) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_arc (start 9.107693 11.211539) (mid 8.665641 11.748461) (end 8.000001 11.950001) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
    `
    back_silkscreen[3] = ``

    const back_pads = []
    back_pads[0] = ``
    back_pads[1] = `
        (pad "1" smd roundrect (at 8.92 -10.16 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P1})
        (pad "2" smd roundrect (at 8.92 -7.62 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P2})
        (pad "3" smd roundrect (at 8.92 -5.08 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P3})
        (pad "4" smd roundrect (at 8.92 -2.54 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P4})
        (pad "5" smd roundrect (at 8.92 0 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P5})
        (pad "6" smd roundrect (at 8.92 2.54 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P6})
        (pad "7" smd roundrect (at 8.92 5.08 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P7})
        (pad "8" smd roundrect (at 8.92 7.62 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P8})
        (pad "9" smd roundrect (at 8.92 10.16 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P9})
        (pad "10" smd roundrect (at -8.92 -10.16 ${180 + p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P10})
        (pad "11" smd roundrect (at -8.92 -7.62 ${180 + p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P11})
        (pad "12" smd roundrect (at -8.92 -5.08 ${180 + p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P12})
        (pad "13" smd roundrect (at -8.92 -2.54 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P13})
        (pad "14" smd roundrect (at -8.92 0 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P14})
        (pad "15" smd roundrect (at -8.92 2.54 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P15})
        (pad "16" smd roundrect (at -8.92 5.08 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P16})
        (pad "17" smd roundrect (at -8.92 7.62 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P17})
        (pad "18" smd roundrect (at -8.92 10.16 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P18})
        (pad "19" smd roundrect (at 5.08 11.46 ${90 + p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P19})
        (pad "20" smd roundrect (at 2.54 11.46 ${90 + p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P20})
        (pad "21" smd roundrect (at 0 11.46 ${90 + p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P21})
        (pad "22" smd roundrect (at -2.54 11.46 ${90 + p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P22})
        (pad "23" smd roundrect (at -5.08 11.46 ${90 + p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P23})
    `
    back_pads[2] = `
        (pad "1" smd roundrect (at -8.92 -10.16 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P1})
        (pad "2" smd roundrect (at -8.92 -7.62 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P2})
        (pad "3" smd roundrect (at -8.92 -5.08 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P3})
        (pad "4" smd roundrect (at -8.92 -2.54 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P4})
        (pad "5" smd roundrect (at -8.92 0 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P5})
        (pad "6" smd roundrect (at -8.92 2.54 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P6})
        (pad "7" smd roundrect (at -8.92 5.08 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P7})
        (pad "8" smd roundrect (at -8.92 7.62 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P8})
        (pad "9" smd roundrect (at -8.92 10.16 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P9})
        (pad "10" smd roundrect (at 8.92 -10.16 ${180 + p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P10})
        (pad "11" smd roundrect (at 8.92 -7.62 ${180 + p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P11})
        (pad "12" smd roundrect (at 8.92 -5.08 ${180 + p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P12})
        (pad "13" smd roundrect (at 8.92 -2.54 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P13})
        (pad "14" smd roundrect (at 8.92 0 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P14})
        (pad "15" smd roundrect (at 8.92 2.54 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P15})
        (pad "16" smd roundrect (at 8.92 5.08 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P16})
        (pad "17" smd roundrect (at 8.92 7.62 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P17})
        (pad "18" smd roundrect (at 8.92 10.16 ${p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P18})
        (pad "19" smd roundrect (at -5.08 11.46 ${270 + p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P19})
        (pad "20" smd roundrect (at -2.54 11.46 ${270 + p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P20})
        (pad "21" smd roundrect (at 0 11.46 ${270 + p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P21})
        (pad "22" smd roundrect (at 2.54 11.46 ${270 + p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P22})
        (pad "23" smd roundrect (at 5.08 11.46 ${270 + p.rot}) (size 3.5 1.8) (layers "B.Cu" "B.Mask") (roundrect_rratio 0.25)  ${p.P23})
    `
    back_pads[3] = ``


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
    edge_cuts[1] = edge_cuts[0]
    edge_cuts[2] = `
        (fp_line (start -6.5 7.5) (end -6.5 -8.75) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_line (start -5.500232 -9.749946) (end -5.057768 -9.750053) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_line (start -4.557768 -10.250053) (end -4.557768 -12.950053) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_line (start 4.557768 -10.250053) (end 4.557768 -12.950053) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_line (start 5.5 -11.75) (end -5.5 -11.75) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_line (start 5.5 8.5) (end -5.5 8.5) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_line (start 5.500232 -9.749946) (end 5.057768 -9.750053) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_line (start 6.5 -8.75) (end 6.5 7.5) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start -6.5 -8.75) (mid -6.207107 -9.457107) (end -5.5 -9.75) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start -5.5 8.5) (mid -6.207107 8.207107) (end -6.5 7.5) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start -5.057768 -13.450053) (mid -4.704217 -13.303604) (end -4.557768 -12.950053) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start -4.557768 -10.250053) (mid -4.704215 -9.8965) (end -5.057768 -9.750053) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start 4.557768 -12.950053) (mid 4.704218 -13.303602) (end 5.057768 -13.450053) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start 5.057768 -9.750053) (mid 4.704217 -9.8965) (end 4.557768 -10.250053) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start 5.5 -9.75) (mid 6.207107 -9.457107) (end 6.5 -8.75) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start 6.5 7.5) (mid 6.207107 8.207107) (end 5.5 8.5) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
    `
    edge_cuts[3] = edge_cuts[2]


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

    const model = `
        (model "\${TB2086_GLOBAL}/packages3D/RP2040-ZERO-WAVESHARE.step" ${offset_3d} (scale (xyz 1 1 1)) ${rot_3d})
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
    final += back_silkscreen[idx];
    final += back_pads[idx];

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
        final += model;
    }

    final += standard_closing;

    return final
  }
}
