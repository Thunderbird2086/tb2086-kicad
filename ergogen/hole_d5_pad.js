module.exports = {
  params: {
    designator: 'H',    // change it accordingly
    P1: {type: 'net', value: 'P1'}, // undefined}, // change to undefined as needed
  },
  body: p => {
    const standard_opening = `(
         footprint "MountingHole_5mm_Pad"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (descr "Mounting Hole 5mm")
        (tags "mounting hole 5mm")
        (attr exclude_from_pos_files exclude_from_bom)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (property "Reference" "${p.ref}" (at 0 -6 ${0 + p.rot}) (layer "F.SilkS") (uuid "2e942c69-e39c-4ca8-ad5d-8081c89214ff") (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_pads = `
    `
    const front_fabrication = `
        (property "Value" "MountingHole_5mm_Pad" (at 0 6 ${0 + p.rot}) (layer "F.Fab") (uuid "94bf9470-1502-45c2-aeb9-c8873781c991") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "ebc27384-f87f-49cf-b0ce-e58aac439317") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "de99c6fd-9e58-4330-bb23-3fb147001d32") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "e5c9abde-8cbe-4d5f-a2ff-5e867c1e6d58") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text user "${p.ref}" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (uuid "74ecfcec-909f-4eae-8d60-9cde9e7efb75") (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_circle (center 0 0) (end 5.25 0) (stroke (width 0.05) (type solid)) (fill none) (layer "F.CrtYd") (uuid "21b05552-9046-4e44-b683-b90b374acf75"))
    `
    const front_paste = `
    `
    const pads = `
        (pad "1" thru_hole circle (at 0 0 ${p.rot}) (size 10 10) (drill 5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "e68cf5f8-be6d-4fdb-b214-065bf3845276") ${p.P1})
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
        (fp_circle (center 0 0) (end 5 0) (stroke (width 0.15) (type solid)) (fill none) (layer "Cmts.User") (uuid "17e9c600-20d6-4308-a622-4307d15c4bf3"))
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
