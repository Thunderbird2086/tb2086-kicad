module.exports = {
  params: {
    designator: 'H',    // change it accordingly
    side: 'F',          // delete if not needed
  },
  body: p => {
    const standard_opening = `(
         footprint "TB2086_MISC:MountingHole_5mm_NPTH"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "${p.side}.Cu")
        (descr "Mounting Hole 5mm")
        (tags "mounting hole 5mm")
        (property "Reference" "${p.ref}" (at 0 -6 ${0 + p.rot}) (layer "${p.side}.SilkS") ${p.ref_hide}  (effects (font (size 1 1) (thickness 0.15))))
        (attr exclude_from_pos_files exclude_from_bom)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
    `
    const front_pads = `
    `
    const front_fabrication = `
        (property "Value" "MountingHole_5mm_NPTH" (at 0 6 ${0 + p.rot}) (layer "F.Fab")  (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text user "\${REFERENCE}" (at 0 0 ${0 + p.rot}) (layer "F.Fab")  (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_circle (center 0 0) (end 2.7 0) (stroke (width 0.05) (type solid)) (fill none) (layer "F.CrtYd") )
    `
    const front_paste = `
    `
    const pads = `
        (pad "" np_thru_hole circle (at 0 0 ${p.rot}) (size 5.1 5.1) (drill 5.1) (layers "*.Mask") )
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
        (fp_circle (center 0 0) (end 2.55 0) (stroke (width 0.15) (type solid)) (fill none) (layer "Cmts.User") )
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
