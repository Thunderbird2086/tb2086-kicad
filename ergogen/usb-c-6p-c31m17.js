module.exports = {
  params: {
    designator: 'USB',    // change it accordingly
    side: 'F',          // delete if not needed
    show_3d: false,     // delete if not needed
    B5: {type: 'net', value: 'B5'}, // undefined}, // change to undefined as needed
    B9: {type: 'net', value: 'B9'}, // undefined}, // change to undefined as needed
    A5: {type: 'net', value: 'A5'}, // undefined}, // change to undefined as needed
    B12: {type: 'net', value: 'B12'}, // undefined}, // change to undefined as needed
    S1: {type: 'net', value: 'S1'}, // undefined}, // change to undefined as needed
    A12: {type: 'net', value: 'A12'}, // undefined}, // change to undefined as needed
    A9: {type: 'net', value: 'A9'}, // undefined}, // change to undefined as needed
  },
  body: p => {
    const standard_opening = `(
         footprint "USB-C-6P-C-31-M-17"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (property "Reference" "${p.ref}" (at 0 -0.5 ${0 + p.rot}) (unlocked yes) (layer "F.SilkS") (hide yes) (uuid "541790a0-a44c-41fe-81ec-4e0b79f02472") (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_pads = `
        (pad "A5" smd roundrect (at -0.5 -3.18 ${p.rot}) (size 0.8 1.6) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (uuid "2b87e2bd-cec0-43df-98ff-fcb38be69ec6") ${p.A5})
        (pad "A9" smd roundrect (at 1.52 -3.18 ${p.rot}) (size 0.8 1.6) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (uuid "18cd8bcb-609f-4a0f-b10a-791602818c83") ${p.A9})
        (pad "A12" smd roundrect (at 2.75 -3.18 ${p.rot}) (size 0.9 1.6) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (uuid "9bf34749-517a-4ad3-a173-7a358f81e83c") ${p.A12})
        (pad "B5" smd roundrect (at 0.5 -3.18 ${p.rot}) (size 0.8 1.6) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (uuid "3f5c03f3-9a72-4766-9917-e94c5f8167de") ${p.B5})
        (pad "B9" smd roundrect (at -1.52 -3.18 ${p.rot}) (size 0.8 1.6) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (uuid "92d06653-baab-40fb-b705-bcfc5fe3a37a") ${p.B9})
        (pad "B12" smd roundrect (at -2.75 -3.18 ${p.rot}) (size 0.9 1.6) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (uuid "17d1f752-9acb-4107-8fdb-487c92438cc5") ${p.B12})
    `
    const front_fabrication = `
        (property "Value" "USB-C-6P-C-31-M-17" (at 0 1 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (uuid "37f95011-fb14-4027-b860-98c2283bf494") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "584669da-11ff-4fed-9f93-534e4bfb4b07") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "2c5104a6-dc94-47e8-816d-10c633a0bd57") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "44156567-b97c-4120-bf8e-6699e731712d") (effects (font (size 1.27 1.27) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_rect (start -4.17 -3.4) (end 4.17 3.4) (stroke (width 0.12) (type default)) (fill none) (layer "F.CrtYd") (uuid "ed10c089-69ec-47d8-acc9-c9829df0fef3"))
    `
    const front_paste = `
    `
    const pads = `
        (pad "S1" thru_hole oval (at -4.32 -3 ${p.rot}) (size 1 1.7) (drill oval 0.5 1.2) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "4670774a-a29d-4a0c-8cd1-1d4da94fe92b") ${p.S1})
        (pad "S1" thru_hole oval (at -4.32 0.8 ${p.rot}) (size 1 1.7) (drill oval 0.5 1.2) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "78fc74b9-0264-4c26-a563-f929da598d31") ${p.S1})
        (pad "S1" thru_hole oval (at 4.32 -3 ${p.rot}) (size 1 1.7) (drill oval 0.5 1.2) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "876af0bc-6fa5-4dce-9d42-79d5a6aee173") ${p.S1})
        (pad "S1" thru_hole oval (at 4.32 0.8 ${p.rot}) (size 1 1.7) (drill oval 0.5 1.2) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "2a6dc76d-1275-47c1-aabb-d819732c8985") ${p.S1})
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
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/GCT_USB4105-GF-A.wrl" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
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
