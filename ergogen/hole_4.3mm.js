module.exports = {
  params: {
    designator: 'H',    // change it accordingly
    side: 'F',          // delete if not needed
    P1: {type: 'net', value: 'P1'}, // undefined}, // change to undefined as needed
  },
  body: p => {
    const standard_opening = `(
         footprint "TB2086_MISC:MountingHole_4.3mm"
        (version 20241229)
        (generator "pcbnew")
        (generator_version "9.0")
        (layer "${p.side}.Cu")
        (descr "Mounting Hole 4.3mm, no annular")
        (tags "mounting hole 4.3mm no annular")
        (property "Reference" "${p.ref}" (at 0 -5.5 ${0 + p.rot}) (layer "${p.side}.SilkS") ${p.ref_hide}  (effects (font (size 1 1) (thickness 0.15))))
        (attr exclude_from_pos_files exclude_from_bom)
        (embedded_fonts no)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
    `
    const front_pads = `
    `
    const front_fabrication = `
        (property "Value" "MountingHole_4.3mm" (at 0 5.5 ${0 + p.rot}) (layer "F.Fab")  (effects (font (size 1 1) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text user "\${REFERENCE}" (at 0 0 ${0 + p.rot}) (layer "F.Fab")  (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_circle (center 0 0) (end 2.75 0) (stroke (width 0.05) (type solid)) (fill no) (layer "F.CrtYd") )
    `
    const front_paste = `
    `
    const pads = `
        (pad "1" thru_hole circle (at 0 0 ${p.rot}) (size 4.65 4.65) (drill 4.3) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (zone_connect 2)  ${p.P1})
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
        (fp_circle (center 0 0) (end 2.55 0) (stroke (width 0.15) (type solid)) (fill no) (layer "Cmts.User") )
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
