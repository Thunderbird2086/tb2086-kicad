module.exports = {
  params: {
    designator: 'H',    // change it accordingly
  },
  body: p => {
    const standard_opening = `(
         footprint "TB2086_MISC:D4_Hole_TH_Outside"
        (version 20221018)
        (generator pcbnew)
        (layer "F.Cu")
        (attr through_hole)
        (fp_text reference "${p.ref}" (at 0 0.5 ${p.rot}) (layer "${p.side}.SilkS") hide (effects (font (size 1 1) (thickness 0.15))) (tstamp 58228c5c-3b5c-4e4e-8aea-d2ed44d16578))
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
    `
    const front_pads = `
    `
    const front_fabrication = `
        (fp_text value "D4_Hole_TH_Outside" (at 0 -0.5 ${p.rot}) (layer "F.Fab") hide (effects (font (size 1 1) (thickness 0.15))) (tstamp ebf09209-6ab7-4313-90f8-e27facb0c683))
    `
    const front_mask = `
    `
    const front_courtyard = `
    `
    const front_paste = `
    `
    const pads = `
        (pad "" thru_hole circle (at 0 0 ${p.rot}) (size 4.5 4.5) (drill 4) (layers "*.Cu" "*.Mask") (tstamp 7e38cba2-c66d-4f1e-b05d-38c926268529))
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
