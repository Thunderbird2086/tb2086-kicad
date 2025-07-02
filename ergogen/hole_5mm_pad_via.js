module.exports = {
  params: {
    designator: 'H',    // change it accordingly
    side: 'F',          // delete if not needed
    P1: {type: 'net', value: 'P1'}, // undefined}, // change to undefined as needed
  },
  body: p => {
    const standard_opening = `(
         footprint "TB2086_MISC:MountingHole_5mm_Pad_Via"
        (version 20241229)
        (generator "pcbnew")
        (generator_version "9.0")
        (layer "${p.side}.Cu")
        (descr "Mounting Hole 5mm")
        (tags "mounting hole 5mm")
        (property "Reference" "${p.ref}" (at 0 -6 ${0 + p.rot}) (layer "${p.side}.SilkS") ${p.ref_hide}  (effects (font (size 1 1) (thickness 0.15))))
        (attr exclude_from_pos_files exclude_from_bom)
        (embedded_fonts no)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
    `
    const front_pads = `
    `
    const front_fabrication = `
        (property "Value" "MountingHole_5mm_Pad_Via" (at 0 6 ${0 + p.rot}) (layer "F.Fab")  (effects (font (size 1 1) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text user "\${REFERENCE}" (at 0 0 ${0 + p.rot}) (layer "F.Fab")  (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_circle (center 0 0) (end 5.25 0) (stroke (width 0.05) (type solid)) (fill no) (layer "F.CrtYd") )
    `
    const front_paste = `
    `
    const pads = `
        (pad "1" thru_hole circle (at -3.75 0 ${p.rot}) (size 0.9 0.9) (drill 0.6) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (zone_connect 2)  ${p.P1})
        (pad "1" thru_hole circle (at -2.65165 -2.65165 ${p.rot}) (size 0.9 0.9) (drill 0.6) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (zone_connect 2)  ${p.P1})
        (pad "1" thru_hole circle (at -2.65165 2.65165 ${p.rot}) (size 0.9 0.9) (drill 0.6) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (zone_connect 2)  ${p.P1})
        (pad "1" thru_hole circle (at 0 -3.75 ${p.rot}) (size 0.9 0.9) (drill 0.6) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (zone_connect 2)  ${p.P1})
        (pad "1" thru_hole circle (at 0 0 ${p.rot}) (size 10 10) (drill 5) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P1})
        (pad "1" thru_hole circle (at 0 3.75 ${p.rot}) (size 0.9 0.9) (drill 0.6) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (zone_connect 2)  ${p.P1})
        (pad "1" thru_hole circle (at 2.65165 -2.65165 ${p.rot}) (size 0.9 0.9) (drill 0.6) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (zone_connect 2)  ${p.P1})
        (pad "1" thru_hole circle (at 2.65165 2.65165 ${p.rot}) (size 0.9 0.9) (drill 0.6) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (zone_connect 2)  ${p.P1})
        (pad "1" thru_hole circle (at 3.75 0 ${p.rot}) (size 0.9 0.9) (drill 0.6) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (zone_connect 2)  ${p.P1})
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
        (fp_circle (center 0 0) (end 5 0) (stroke (width 0.15) (type solid)) (fill no) (layer "Cmts.User") )
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
