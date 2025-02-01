module.exports = {
  params: {
    designator: 'H',    // change it accordingly
  },
  body: p => {
    const standard_opening = `(
         footprint "TB2086_MISC:M2_Hole_TH"
        (version 20221018)
        (generator pcbnew)
        (layer "F.Cu")
        (attr through_hole)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_text reference "${p.ref}" (at 0 0.5 ${p.rot}) (layer "F.SilkS") ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))) (tstamp 2587db10-d45b-4629-a7b4-972dbe5d188c))
    `
    const front_pads = `
    `
    const front_fabrication = `
        (fp_text value "M2_Hole_TH" (at 0 -0.5 ${p.rot}) (layer "F.Fab") (effects (font (size 1 1) (thickness 0.15))) (tstamp be92b119-e508-4528-a27a-dd54b2eb7fb9))
    `
    const front_mask = `
    `
    const front_courtyard = `
    `
    const front_paste = `
    `
    const pads = `
        (pad "" thru_hole circle (at 0 0 ${p.rot}) (size 4.2 4.2) (drill 2.3) (layers "*.Cu" "*.Mask") (tstamp bc795983-5a7e-4627-8553-f4cdd0e2e1a7))
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
