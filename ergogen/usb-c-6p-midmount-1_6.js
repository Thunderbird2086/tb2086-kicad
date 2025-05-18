module.exports = {
  params: {
    designator: 'USB',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,     // delete if not needed
    B9: {type: 'net', value: 'B9'}, // undefined}, // change to undefined as needed
    A5: {type: 'net', value: 'A5'}, // undefined}, // change to undefined as needed
    B12: {type: 'net', value: 'B12'}, // undefined}, // change to undefined as needed
    S1: {type: 'net', value: 'S1'}, // undefined}, // change to undefined as needed
    B5: {type: 'net', value: 'B5'}, // undefined}, // change to undefined as needed
    A9: {type: 'net', value: 'A9'}, // undefined}, // change to undefined as needed
    A12: {type: 'net', value: 'A12'}, // undefined}, // change to undefined as needed
  },
  body: p => {
    let fp_name="TB2086_SMD:USB-C-6P-midmount-1.6mm"
    const standard_opening = `(
         footprint "${fp_name}"
        (version 20241229)
        (generator "pcbnew")
        (generator_version "9.0")
        (layer "${p.side}.Cu")
        (descr "USB 3.1 1 Sinking plate 6P Female -25℃~+85℃ Type-C SMD ")
        (tags "C399928, 918-418K2024S40006")
        (property "Reference" "${p.ref}" (at 0 -0.5 ${0 + p.rot}) (unlocked yes) (layer "${p.side}.SilkS") ${p.ref_hide}  (effects (font (size 1 1) (thickness 0.15))))
        (embedded_fonts no)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
    `
    const front_pads = `
        (pad "A5" smd roundrect (at -0.5 -4 ${p.rot}) (size 0.8 1.4) (layers "F.Cu" "F.Mask" "F.Paste") (roundrect_rratio 0.25)  ${p.A5})
        (pad "A9" smd roundrect (at 1.52 -4 ${p.rot}) (size 0.8 1.4) (layers "F.Cu" "F.Mask" "F.Paste") (roundrect_rratio 0.25)  ${p.A9})
        (pad "A12" smd roundrect (at 2.75 -4 ${p.rot}) (size 0.9 1.4) (layers "F.Cu" "F.Mask" "F.Paste") (roundrect_rratio 0.25)  ${p.A12})
        (pad "B5" smd roundrect (at 0.5 -4 ${p.rot}) (size 0.8 1.4) (layers "F.Cu" "F.Mask" "F.Paste") (roundrect_rratio 0.25)  ${p.B5})
        (pad "B9" smd roundrect (at -1.52 -4 ${p.rot}) (size 0.8 1.4) (layers "F.Cu" "F.Mask" "F.Paste") (roundrect_rratio 0.25)  ${p.B9})
        (pad "B12" smd roundrect (at -2.75 -4 ${p.rot}) (size 0.9 1.4) (layers "F.Cu" "F.Mask" "F.Paste") (roundrect_rratio 0.25)  ${p.B12})
    `
    const front_fabrication = `
        (property "Value" "${fp_name}" (at 0 1 ${0 + p.rot}) (unlocked yes) (layer "F.Fab")  (effects (font (size 1 1) (thickness 0.15))))
        (property "Datasheet" "https://jlcpcb.com/api/file/downloadByFileSystemAccessId/8590165822238068736" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_rect (start -4.62 -3.28) (end 4.62 3.4) (stroke (width 0.12) (type default)) (fill no) (layer "F.CrtYd") )
    `
    const front_paste = `
    `
    const pads = `
        (pad "S1" thru_hole oval (at -5.575 -2.8 ${p.rot}) (size 1.3 2.3) (drill oval 0.5 1.3) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.S1})
        (pad "S1" thru_hole oval (at -5.575 0.8 ${p.rot}) (size 1.3 2.5) (drill oval 0.5 1.7) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.S1})
        (pad "S1" thru_hole oval (at 5.575 -2.8 ${p.rot}) (size 1.3 2.3) (drill oval 0.5 1.3) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.S1})
        (pad "S1" thru_hole oval (at 5.575 0.8 ${p.rot}) (size 1.3 2.5) (drill oval 0.5 1.7) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.S1})
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
    const edge_cuts = `
        (fp_line (start -4.62 3.4) (end -4.62 -3.000001) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_line (start -3.686988 -3.3) (end 3.68699 -3.300001) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_line (start 4.62 -3) (end 4.62 3.4) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start -4.62 -3) (mid -4.278114 -3.474342) (end -3.72 -3.3) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start 3.720001 -3.300001) (mid 4.278114 -3.474341) (end 4.62 -3) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
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
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/GCT_USB4510-03-1-A.wrl" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
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
