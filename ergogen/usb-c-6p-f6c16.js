module.exports = {
  params: {
    designator: 'USB',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,     // delete if not needed
    B5: {type: 'net', value: 'B5'}, // undefined}, // change to undefined as needed
    A12: {type: 'net', value: 'A12'}, // undefined}, // change to undefined as needed
    S1: {type: 'net', value: 'S1'}, // undefined}, // change to undefined as needed
    B12: {type: 'net', value: 'B12'}, // undefined}, // change to undefined as needed
    A9: {type: 'net', value: 'A9'}, // undefined}, // change to undefined as needed
    A5: {type: 'net', value: 'A5'}, // undefined}, // change to undefined as needed
    B9: {type: 'net', value: 'B9'}, // undefined}, // change to undefined as needed
  },
  body: p => {
    let fp_name="TB2086_SMD:USB-20C-F-6C16"
    if (p.reversible) {
        fp_name += "_rev";
    }
    const standard_opening = `(
         footprint "${fp_name}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "${p.side}.Cu")
        (property "Reference" "${p.ref}" (at 0 -0.5 ${0 + p.rot}) (unlocked yes) (layer "${p.side}.SilkS") ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
    `
    const front_pads = `
        (pad "A5" smd roundrect (at -0.5 -4.5 ${p.rot}) (size 0.8 1.6) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25)  ${p.A5})
        (pad "A9" smd roundrect (at 1.52 -4.5 ${p.rot}) (size 0.8 1.6) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25)  ${p.A9})
        (pad "A12" smd roundrect (at 2.75 -4.5 ${p.rot}) (size 0.9 1.6) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25)  ${p.A12})
        (pad "B5" smd roundrect (at 0.5 -4.5 ${p.rot}) (size 0.8 1.6) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25)  ${p.B5})
        (pad "B9" smd roundrect (at -1.52 -4.5 ${p.rot}) (size 0.8 1.6) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25)  ${p.B9})
        (pad "B12" smd roundrect (at -2.75 -4.5 ${p.rot}) (size 0.9 1.6) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25)  ${p.B12})
    `
    const front_fabrication = `
        (property "Value" "${fp_name}" (at 0 1 ${0 + p.rot}) (unlocked yes) (layer "F.Fab")  (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_rect (start -4.62 -2.8) (end 4.62 3.4) (stroke (width 0.12) (type default)) (fill none) (layer "F.CrtYd") )
    `
    const front_paste = `
    `
    const pads = `
        (pad "S1" thru_hole oval (at -5.575 -3 ${p.rot}) (size 1.3 2.3) (drill oval 0.6 1.6) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.S1})
        (pad "S1" thru_hole oval (at -5.575 0.8 ${p.rot}) (size 1.3 2.5) (drill oval 0.6 1.8) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.S1})
        (pad "S1" thru_hole oval (at 5.575 -3 ${p.rot}) (size 1.3 2.3) (drill oval 0.6 1.6) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.S1})
        (pad "S1" thru_hole oval (at 5.575 0.8 ${p.rot}) (size 1.3 2.5) (drill oval 0.6 1.8) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.S1})
    `
    const back_silkscreen = `
    `
    const back_pads = `
        (pad "A5" smd roundrect (at 0.5 -4.5 ${p.rot}) (size 0.8 1.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)  ${p.A5})
        (pad "A9" smd roundrect (at -1.52 -4.5 ${p.rot}) (size 0.8 1.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)  ${p.A9})
        (pad "A12" smd roundrect (at -2.75 -4.5 ${p.rot}) (size 0.9 1.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)  ${p.A12})
        (pad "B5" smd roundrect (at -0.5 -4.5 ${p.rot}) (size 0.8 1.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)  ${p.B5})
        (pad "B9" smd roundrect (at 1.52 -4.5 ${p.rot}) (size 0.8 1.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)  ${p.B9})
        (pad "B12" smd roundrect (at 2.75 -4.5 ${p.rot}) (size 0.9 1.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)  ${p.B12})
    `
    const back_fabrication = `
        (property "Value" "${fp_name}" (at 0 1 ${0 + p.rot}) (unlocked yes) (layer "B.Fab")  (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "B.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "B.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "B.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
    `
    const back_mask = `
    `
    const back_courtyard = `
        (fp_rect (start -4.62 -2.8) (end 4.62 3.4) (stroke (width 0.12) (type default)) (fill none) (layer "B.CrtYd") )
    `
    const back_paste = `
    `
    const edge_cuts = `
        (fp_line (start -4.62 3.4) (end -4.62 -2.8) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_line (start -3.686988 -3.05) (end 3.68699 -3.050001) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_line (start 4.62 -2.8) (end 4.62 3.4) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start -4.62 -2.8) (mid -4.24941 -3.282963) (end -3.686988 -3.050001) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start 3.686988 -3.050001) (mid 4.24941 -3.282963) (end 4.62 -2.8) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )
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
