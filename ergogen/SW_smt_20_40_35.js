module.exports = {
  params: {
    designator: 'RSW',
    side: 'F',
    reversible: false,
    show_3d: false,
    P1: {type: 'net', value: undefined}, // change to undefined as needed
    P2: {type: 'net', value: undefined}, // change to undefined as needed
    MP: {type: 'net', value: 'MP'}, // undefined, // change to undefined as needed
  },
  body: p => {
    const standard_opening = `(
         footprint "SMT 2X4X3.5MM Tactile Tact Push Button rev"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (property "Reference" "${p.ref}" (at 0 -0.5 ${0 + p.rot}) (unlocked yes) (layer "F.SilkS") (hide yes) (uuid "e5bb4b79-13a7-4889-af3d-121bf971c8ef") (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_pads = `
        (pad "1" smd roundrect (at 1.1675 1.55 ${p.rot}) (size 1.15 1.3) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "333cd0fa-b322-49c1-8375-80c702b02b2d") ${p.P1})
        (pad "1" smd roundrect (at 1.575 1.55 ${p.rot}) (size 1.15 0.5) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "54c34c30-a502-4122-840d-bd81c7c2518f") ${p.P1})
        (pad "2" smd roundrect (at -1.575 1.55 ${p.rot}) (size 1.15 0.5) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "05b2b90c-04f6-4aa2-b602-cb0bdfbbe829") ${p.P2})
        (pad "2" smd roundrect (at -1.1675 1.55 ${p.rot}) (size 1.15 1.3) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "3571d210-2da7-4f1a-9fdb-49646a50fa89") ${p.P2})
        (pad "MP" smd roundrect (at -2.3 0 ${p.rot}) (size 0.9 1.2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "78c4a84f-d2e3-4b62-93f0-55871fe05239") ${p.MP})
        (pad "MP" smd roundrect (at 2.3 0 ${p.rot}) (size 0.9 1.2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "80ca96e0-bbfb-4b1b-890f-945e0d0302c8") ${p.MP})
    `
    const front_fabrication = `
        (property "Value" "SMT 2X4X3.5MM Tactile Tact Push Button rev" (at 0 1 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (uuid "2a5fb532-fee7-4dd4-b93b-464af078aab8") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "838ca5b0-790e-4476-989d-ec162e65de18") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "9666757b-77ba-4f27-8f88-4f80b938807b") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "29fdd4ad-b71a-439c-aaf8-45a3ea40cd0d") (effects (font (size 1.27 1.27) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_rect (start -2.25 -0.9) (end 2.25 2.1) (stroke (width 0.12) (type default)) (fill none) (layer "F.CrtYd") (uuid "c595c353-303d-4838-a9de-e314acf72512"))
        (fp_rect (start -1.85 -2.1) (end 1.85 -0.9) (stroke (width 0.12) (type default)) (fill none) (layer "F.CrtYd") (uuid "b0d15088-767d-4792-9e8d-e824fdad7544"))
    `
    const front_paste = `
    `
    const pads = `
        (pad "1" thru_hole circle (at 2.1 1.55 ${p.rot}) (size 0.5 0.5) (drill 0.3) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "dbcf6ed7-299a-487b-b87a-3d0509b8f7e7") ${p.P1})
        (pad "2" thru_hole circle (at -2.1 1.55 ${p.rot}) (size 0.5 0.5) (drill 0.3) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "a0553ff6-b03c-42f5-aa86-6b22980fad95") ${p.P2})
    `
    const back_silkscreen = `
        (fp_text user "${p.ref}" (at 0 -0.5 ${0 + p.rot}) (unlocked yes) (layer "B.SilkS") (hide yes) (uuid "014c5fd7-e342-428f-ab14-a5b2425f308c") (effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
    `
    const back_pads = `
        (pad "1" smd roundrect (at 1.1675 1.55 ${p.rot}) (size 1.15 1.3) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "c9aa3630-aa04-414a-a7aa-4403705a9092") ${p.P1})
        (pad "1" smd roundrect (at 1.575 1.55 ${p.rot}) (size 1.15 0.5) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "c0c23d05-a8f0-49b4-8ebd-ac6989e920b5") ${p.P1})
        (pad "2" smd roundrect (at -1.575 1.55 ${p.rot}) (size 1.15 0.5) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "1177c8cd-6087-4517-bb6a-4454af3f2486") ${p.P2})
        (pad "2" smd roundrect (at -1.1675 1.55 ${p.rot}) (size 1.15 1.3) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "0f332317-7237-43e7-b4b3-fd4b9ca212c1") ${p.P2})
        (pad "MP" smd roundrect (at -2.3 0 ${p.rot}) (size 0.9 1.2) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "de0a8a98-6925-4324-b4f8-f2a21edc0f0e") ${p.MP})
        (pad "MP" smd roundrect (at 2.3 0 ${p.rot}) (size 0.9 1.2) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "96a40564-085a-4579-a18a-9b1e18d4dde7") ${p.MP})
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
        (fp_circle (center -0.8 0) (end -0.45 0) (stroke (width 0.12) (type default)) (fill none) (layer "Edge.Cuts") (uuid "0433a4ce-ca82-483e-bb19-931d8df0755f"))
        (fp_circle (center 0.85 0) (end 1.2 0) (stroke (width 0.12) (type default)) (fill none) (layer "Edge.Cuts") (uuid "ca06cdee-c80c-410d-bf96-ce705b0a78b6"))
    `
    const user_drawing = `
    `
    const user_comments = `
    `
    const user_eco1 = `
    `
    const user_eco2 = `
    `
    let offset = "(xyz 0 -0.2 0)"
    let rotate = "(xyz -90 0 0)"
    if (p.side == "B") {
        offset = "(xyz 0 -0.2 -1.6)"
        rotate = "(xyz -90 180 0)"
    }
    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/2x4x3.5 Toucn Switch SMD v1.step" (offset ${offset}) (scale (xyz 1 1 1)) (rotate ${rotate}))
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
