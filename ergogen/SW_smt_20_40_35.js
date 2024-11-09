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
    let fp_name="SMT 2X4X3.5MM Tactile Tact Push Button"
    if (p.reversible) {
        fp_name = "TB2086_SMD:" + fp_name + " rev";
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (property "Reference" "${p.ref}" (at 0 -0.5 ${0 + p.rot}) (unlocked yes) (layer "${p.side}.SilkS") (hide yes)  (effects (font (size 1 1) (thickness 0.15))))
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
    `
    const front_pads = `
        (pad "1" smd roundrect (at 1.1675 1.55 ${p.rot}) (size 1.15 1.3) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45)  ${p.P1})
        (pad "1" smd roundrect (at 1.575 1.55 ${p.rot}) (size 1.15 0.5) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45)  ${p.P1})
        (pad "2" smd roundrect (at -1.575 1.55 ${p.rot}) (size 1.15 0.5) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45)  ${p.P2})
        (pad "2" smd roundrect (at -1.1675 1.55 ${p.rot}) (size 1.15 1.3) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45)  ${p.P2})
        (pad "MP" smd roundrect (at -2.3 0 ${p.rot}) (size 0.9 1.2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45)  ${p.MP})
        (pad "MP" smd roundrect (at 2.3 0 ${p.rot}) (size 0.9 1.2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45)  ${p.MP})
    `
    const front_fabrication = `
        (property "Value" "${fp_name}" (at 0 1 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (uuid "2a5fb532-fee7-4dd4-b93b-464af078aab8") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_rect (start -2.25 -0.9) (end 2.25 2.1) (stroke (width 0.12) (type default)) (fill none) (layer "F.CrtYd") )
        (fp_rect (start -1.85 -2.1) (end 1.85 -0.9) (stroke (width 0.12) (type default)) (fill none) (layer "F.CrtYd") )
    `
    const front_paste = `
    `
    const pads = `
        (pad "1" thru_hole circle (at 2.1 1.55 ${p.rot}) (size 0.5 0.5) (drill 0.3) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P1})
        (pad "2" thru_hole circle (at -2.1 1.55 ${p.rot}) (size 0.5 0.5) (drill 0.3) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P2})
    `
    const back_silkscreen = `
        (fp_text user "${p.ref}" (at 0 -0.5 ${0 + p.rot}) (unlocked yes) (layer "B.SilkS") (hide yes) (effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
    `
    const back_pads = `
        (pad "1" smd roundrect (at 1.1675 1.55 ${p.rot}) (size 1.15 1.3) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45)  ${p.P1})
        (pad "1" smd roundrect (at 1.575 1.55 ${p.rot}) (size 1.15 0.5) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45)  ${p.P1})
        (pad "2" smd roundrect (at -1.575 1.55 ${p.rot}) (size 1.15 0.5) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45)  ${p.P2})
        (pad "2" smd roundrect (at -1.1675 1.55 ${p.rot}) (size 1.15 1.3) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45)  ${p.P2})
        (pad "MP" smd roundrect (at -2.3 0 ${p.rot}) (size 0.9 1.2) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45)  ${p.MP})
        (pad "MP" smd roundrect (at 2.3 0 ${p.rot}) (size 0.9 1.2) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45)  ${p.MP})
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
        (fp_circle (center -0.8 0) (end -0.45 0) (stroke (width 0.12) (type default)) (fill none) (layer "Edge.Cuts") )
        (fp_circle (center 0.85 0) (end 1.2 0) (stroke (width 0.12) (type default)) (fill none) (layer "Edge.Cuts") )
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
