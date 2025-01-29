module.exports = {
  params: {
    designator: 'J',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,     // delete if not needed
    P2: {type: 'net', value: undefined}, // change to undefined as needed
    MP: {type: 'net', value: 'MP'}, // undefined, // change to undefined as needed
    P1: {type: 'net', value: undefined}, // change to undefined as needed
  },
  body: p => {
    let fp_name="TB2086_MISC:Molex_Pico-EZmate_78171-0002_1x02-1MP_P1.20mm_Vertical"
    if (p.reversible) {
        fp_name += "_rev";
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (descr "Molex Pico-EZmate series connector, 78171-0002 (http://www.molex.com/pdm_docs/sd/781710002_sd.pdf), generated with kicad-footprint-generator")
        (tags "connector Molex Pico-EZmate side entry")
        (property "Reference" "${p.ref}" (at 0 -3.5 ${0 + p.rot}) (layer "${p.side}.SilkS") (hide yes)  (effects (font (size 1 1) (thickness 0.15))))
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_line (start -2.21 -2.09) (end -1.16 -2.09) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -2.21 1.24) (end -2.21 -2.09) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -1.16 -2.09) (end -1.16 -2.3) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -1.14 2.63) (end -0.64 2.63) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -0.85 -3.153553) (end -0.6 -2.8) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -0.64 2.63) (end -0.34 2.13) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -0.6 -2.8) (end -0.35 -3.153553) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -0.35 -3.153553) (end -0.85 -3.153553) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -0.34 2.13) (end 0.34 2.13) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start 0.34 2.13) (end 0.64 2.63) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start 0.64 2.63) (end 1.14 2.63) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start 2.21 -2.09) (end 1.16 -2.09) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start 2.21 1.24) (end 2.21 -2.09) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
    `
    const front_pads = `
        (pad "1" smd roundrect (at -0.6 -1.875 ${p.rot}) (size 0.6 0.85) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25)  ${p.P1})
        (pad "1" smd roundrect (at -0.28 -2.2 ${p.rot}) (size 0.3 0.2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45)  ${p.P1})
        (pad "2" smd roundrect (at 0.28 -1.56 ${p.rot}) (size 0.3 0.2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45)  ${p.P2})
        (pad "2" smd roundrect (at 0.6 -1.875 ${p.rot}) (size 0.6 0.85) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25)  ${p.P2})
        (pad "MP" smd roundrect (at -1.75 1.9 ${p.rot}) (size 0.7 0.8) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25)  ${p.MP})
        (pad "MP" smd roundrect (at 1.75 1.9 ${p.rot}) (size 0.7 0.8) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25)  ${p.MP})
    `
    const front_fabrication = `
        (property "Value" "${fp_name}" (at 0 3.72 ${0 + p.rot}) (layer "F.Fab") (uuid "6d62f44a-0582-4f43-9c00-53fc4f88ebae") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_line (start -2.1 -1.98) (end -2.1 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -2.1 -1.98) (end 2.1 -1.98) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -2.1 2.52) (end -0.75 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -1.1 -1.98) (end -0.6 -1.272893) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -0.75 2.52) (end -0.45 2.02) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -0.6 -1.272893) (end -0.1 -1.98) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -0.45 2.02) (end 0.45 2.02) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 0.45 2.02) (end 0.75 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 0.75 2.52) (end 2.1 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 2.1 -1.98) (end 2.1 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_text user "${p.ref}" (at 0 0.27 ${0 + p.rot}) (layer "F.Fab") (uuid "c4a7460e-c105-4c6b-8438-19173dd519bb") (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -2.6 -2.8) (end -2.6 3.02) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -2.6 3.02) (end 2.6 3.02) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 2.6 -2.8) (end -2.6 -2.8) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 2.6 3.02) (end 2.6 -2.8) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
    `
    const front_paste = `
    `
    const pads = `
        (pad "1" thru_hole circle (at 0 -2.2 ${p.rot}) (size 0.4 0.4) (drill 0.3) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P1})
        (pad "2" thru_hole circle (at 0 -1.56 ${p.rot}) (size 0.4 0.4) (drill 0.3) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P2})
    `
    const back_silkscreen = `
        (fp_line (start -2.21 -2.09) (end -1.16 -2.09) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start -2.21 1.24) (end -2.21 -2.09) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start -0.64 2.63) (end -1.14 2.63) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start -0.34 2.13) (end -0.64 2.63) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 0.34 2.13) (end -0.34 2.13) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 0.35 -3.153553) (end 0.85 -3.153553) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 0.6 -2.8) (end 0.35 -3.153553) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 0.64 2.63) (end 0.34 2.13) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 0.85 -3.153553) (end 0.6 -2.8) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 1.14 2.63) (end 0.64 2.63) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 1.16 -2.09) (end 1.16 -2.3) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 2.21 -2.09) (end 1.16 -2.09) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 2.21 1.24) (end 2.21 -2.09) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
    `
    const back_pads = `
        (pad "1" smd roundrect (at 0.28 -2.2 ${p.rot}) (size 0.3 0.2) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45)  ${p.P1})
        (pad "1" smd roundrect (at 0.6 -1.875 ${p.rot}) (size 0.6 0.85) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)  ${p.P1})
        (pad "2" smd roundrect (at -0.6 -1.875 ${p.rot}) (size 0.6 0.85) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)  ${p.P2})
        (pad "2" smd roundrect (at -0.28 -1.56 ${p.rot}) (size 0.3 0.2) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45)  ${p.P2})
        (pad "MP" smd roundrect (at -1.75 1.9 ${p.rot}) (size 0.7 0.8) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)  ${p.MP})
        (pad "MP" smd roundrect (at 1.75 1.9 ${p.rot}) (size 0.7 0.8) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)  ${p.MP})
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
    let offset = "(xyz 0 0 1.6)"
    let rotate = "(xyz -90 0 0)"
    if (p.side == "B") {
        offset = "(xyz 0 0 -3.1)"
        rotate = "(xyz 90 0 180)"
    }
    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/Molex_Ezmate_Pico_Socket_2pin.step" (offset ${offset}) (scale (xyz 1 1 1)) (rotate ${rotate}))
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
