module.exports = {
  params: {
    designator: 'POGO',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,     // delete if not needed
    P4: {type: 'net', value: 'P4'}, // undefined}, // change to undefined as needed
    P6: {type: 'net', value: 'P6'}, // undefined}, // change to undefined as needed
    P2: {type: 'net', value: 'P2'}, // undefined}, // change to undefined as needed
    P3: {type: 'net', value: 'P3'}, // undefined}, // change to undefined as needed
    P5: {type: 'net', value: 'P5'}, // undefined}, // change to undefined as needed
    P1: {type: 'net', value: 'P1'}, // undefined}, // change to undefined as needed
  },
  body: p => {
    const standard_opening = `(
         footprint "TB2086_MISC:Pogopin_1x06_P2.54mm_Curved"
        (version 20241229)
        (generator "pcbnew")
        (generator_version "9.0")
        (layer "${p.side}.Cu")
        (property "Reference" "${p.ref}" (at 0 -1.81 ${0 + p.rot}) (unlocked yes) (layer "${p.side}.SilkS") ${p.ref_hide}  (effects (font (size 1 1) (thickness 0.1))))
        (attr smd)
        (embedded_fonts no)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
    `
    const front_pads = `
    `
    const front_fabrication = `
        (property "Value" "Pogopin_1x06_P2.54mm_Curved" (at 0 2 ${0 + p.rot}) (unlocked yes) (layer "F.Fab")  (effects (font (size 1 1) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1 1) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1 1) (thickness 0.15))))
        (fp_text user "\${REFERENCE}" (at 0 3.5 ${0 + p.rot}) (unlocked yes) (layer "F.Fab")  (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
    `
    const front_paste = `
    `
    const pads = `
        (pad "1" thru_hole circle (at -6.35 0 ${p.rot}) (size 2.1 2.1) (drill 0.9) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P1})
        (pad "2" thru_hole circle (at -3.81 0 ${p.rot}) (size 2.1 2.1) (drill 0.9) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P2})
        (pad "3" thru_hole circle (at -1.27 0 ${p.rot}) (size 2.1 2.1) (drill 0.9) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P3})
        (pad "4" thru_hole circle (at 1.27 0 ${p.rot}) (size 2.1 2.1) (drill 0.9) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P4})
        (pad "5" thru_hole circle (at 3.81 0 ${p.rot}) (size 2.1 2.1) (drill 0.9) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P5})
        (pad "6" thru_hole circle (at 6.35 0 ${p.rot}) (size 2.1 2.1) (drill 0.9) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P6})
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
    `
    const user_drawing = `
        (fp_rect (start -12.55 -3.85) (end -11.5 -2.85) (stroke (width 0.1) (type solid)) (fill no) (layer "Dwgs.User") )
        (fp_rect (start -11.5 -5.85) (end 11.5 -1.85) (stroke (width 0.1) (type solid)) (fill no) (layer "Dwgs.User") )
        (fp_rect (start 11.5 -3.85) (end 12.55 -2.85) (stroke (width 0.1) (type solid)) (fill no) (layer "Dwgs.User") )
    `
    const user_comments = `
    `
    const user_eco1 = `
    `
    const user_eco2 = `
    `
    const model = `
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
