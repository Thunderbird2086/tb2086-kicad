module.exports = {
  params: {
    designator: 'J',    // change it accordingly
    side: 'F',          // delete if not needed
    P2: {type: 'net', value: 'P2'}, // undefined}, // change to undefined as needed
    P1: {type: 'net', value: 'P1'}, // undefined}, // change to undefined as needed
  },
  body: p => {
    const standard_opening = `(
         footprint "TB2086_MISC:Tag_Pogopin_1x02_P2.54mm"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (property "Reference" "${p.ref}" (at 0 -1.27 ${0 + p.rot}) (unlocked yes) (layer "${p.side}.SilkS") (hide yes)  (effects (font (size 1 1) (thickness 0.1))))
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
    `
    const front_pads = `
        (pad "1" smd circle (at -1.27 0 ${p.rot}) (size 0.9 0.9) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.P1})
        (pad "2" smd circle (at 1.27 0 ${p.rot}) (size 0.9 0.9) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.P2})
    `
    const front_fabrication = `
        (property "Value" "Tag_Pogopin_1x02_P2.54mm" (at 0 1.5 ${0 + p.rot}) (unlocked yes) (layer "F.Fab")  (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1 1) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1 1) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1 1) (thickness 0.15))))
        (fp_text user "\${REFERENCE}" (at 0 3 ${0 + p.rot}) (unlocked yes) (layer "F.Fab")  (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
    `
    const front_paste = `
    `
    const pads = `
    `
    const back_silkscreen = `
    `
    const back_pads = `
        (pad "1" smd circle (at -1.27 0 ${p.rot}) (size 0.9 0.9) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.P1})
        (pad "2" smd circle (at 1.27 0 ${p.rot}) (size 0.9 0.9) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.P2})
    `
    const back_fabrication = `
        (property "Value" "Tag_Pogopin_1x02_P2.54mm" (at 0 1.5 ${0 + p.rot}) (unlocked yes) (layer "B.Fab")  (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "B.Fab") (hide yes)  (effects (font (size 1 1) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "B.Fab") (hide yes)  (effects (font (size 1 1) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "B.Fab") (hide yes)  (effects (font (size 1 1) (thickness 0.15))))
        (fp_text user "\${REFERENCE}" (at 0 3 ${0 + p.rot}) (unlocked yes) (layer "B.Fab")  (effects (font (size 1 1) (thickness 0.15))))
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
