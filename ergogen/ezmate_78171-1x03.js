module.exports = {
  params: {
    designator: 'J',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,     // delete if not needed
    P1: {type: 'net', value: undefined}, // change to undefined as needed
    P2: {type: 'net', value: undefined}, // change to undefined as needed
    P3: {type: 'net', value: undefined}, // change to undefined as needed
    MP: {type: 'net', value: 'MP'}, // undefined}, // change to undefined as needed
  },
  body: p => {
    let fp_name="TB2086_MISC:Molex_Pico-EZmate_78171-0003_1x03-1MP_P1.20mm_Vertical"
    if (p.reversible) {
        fp_name += "_rev";
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "${p.side}.Cu")
        (descr "Molex Pico-EZmate series connector, 78171-0003 (http://www.molex.com/pdm_docs/sd/781710002_sd.pdf), generated with kicad-footprint-generator")
        (tags "connector Molex Pico-EZmate side entry")
        (property "Reference" "${p.ref}" (at 0 -3.5 ${0 + p.rot}) (layer "${p.side}.SilkS") ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_line (start -2.81 -2.09) (end -1.76 -2.09) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -2.81 1.24) (end -2.81 -2.09) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -1.76 -2.09) (end -1.76 -2.3) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -1.74 2.63) (end -1.24 2.63) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -1.45 -3.153553) (end -1.2 -2.8) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -1.24 2.63) (end -0.94 2.13) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -1.2 -2.8) (end -0.95 -3.153553) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -0.95 -3.153553) (end -1.45 -3.153553) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -0.94 2.13) (end 0.94 2.13) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start 0.94 2.13) (end 1.24 2.63) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start 1.24 2.63) (end 1.74 2.63) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start 2.81 -2.09) (end 1.76 -2.09) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start 2.81 1.24) (end 2.81 -2.09) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
    `
    const front_pads = `
        (pad "1" smd roundrect (at -1.2 -1.875 ${p.rot}) (size 0.6 0.85) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25)  ${p.P1})
        (pad "2" smd roundrect (at 0 -1.875 ${p.rot}) (size 0.6 0.85) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25)  ${p.P2})
        (pad "3" smd roundrect (at 1.2 -1.875 ${p.rot}) (size 0.6 0.85) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25)  ${p.P3})
        (pad "MP" smd roundrect (at -2.35 1.9 ${p.rot}) (size 0.7 0.8) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25)  ${p.MP})
        (pad "MP" smd roundrect (at 2.35 1.9 ${p.rot}) (size 0.7 0.8) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25)  ${p.MP})
    `
    const front_fabrication = `
        (property "Value" "Molex_Pico-EZmate_78171-0003_1x03-1MP_P1.20mm_Vertical_rev" (at 0 3.72 ${0 + p.rot}) (layer "F.Fab")  (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_line (start -2.7 -1.98) (end -2.7 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -2.7 -1.98) (end 2.7 -1.98) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -2.7 2.52) (end -1.35 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -1.7 -1.98) (end -1.2 -1.272893) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -1.35 2.52) (end -1.05 2.02) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -1.2 -1.272893) (end -0.7 -1.98) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -1.05 2.02) (end 1.05 2.02) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 1.05 2.02) (end 1.35 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 1.35 2.52) (end 2.7 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 2.7 -1.98) (end 2.7 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_text user "${p.ref}" (at 0 0.27 ${0 + p.rot}) (layer "F.Fab") (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -3.2 -2.8) (end -3.2 3.02) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -3.2 3.02) (end 3.2 3.02) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 3.2 -2.8) (end -3.2 -2.8) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 3.2 3.02) (end 3.2 -2.8) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
    `
    const front_paste = `
    `
    const pads = `
    `
    const back_silkscreen = `
        (fp_line (start -2.81 -2.09) (end -1.76 -2.09) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start -2.81 1.24) (end -2.81 -2.09) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start -1.24 2.63) (end -1.74 2.63) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start -0.94 2.13) (end -1.24 2.63) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 0.94 2.13) (end -0.94 2.13) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 0.95 -3.153553) (end 1.45 -3.153553) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 1.2 -2.8) (end 0.95 -3.153553) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 1.24 2.63) (end 0.94 2.13) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 1.45 -3.153553) (end 1.2 -2.8) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 1.74 2.63) (end 1.24 2.63) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 1.76 -2.09) (end 1.76 -2.3) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 2.81 -2.09) (end 1.76 -2.09) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 2.81 1.24) (end 2.81 -2.09) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
    `
    const back_pads = `
        (pad "1" smd roundrect (at 1.2 -1.875 ${p.rot}) (size 0.6 0.85) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)  ${p.P1})
        (pad "2" smd roundrect (at 0 -1.875 ${p.rot}) (size 0.6 0.85) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)  ${p.P2})
        (pad "3" smd roundrect (at -1.2 -1.875 ${p.rot}) (size 0.6 0.85) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)  ${p.P3})
        (pad "MP" smd roundrect (at -2.35 1.9 ${p.rot}) (size 0.7 0.8) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)  ${p.MP})
        (pad "MP" smd roundrect (at 2.35 1.9 ${p.rot}) (size 0.7 0.8) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)  ${p.MP})
    `
    const back_fabrication = `
    `
    const back_mask = `
    `
    const back_courtyard = `
        (fp_line (start -3.2 -2.8) (end 3.2 -2.8) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -3.2 3.02) (end -3.2 -2.8) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 3.2 -2.8) (end 3.2 3.02) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 3.2 3.02) (end -3.2 3.02) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
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
        (model "\${KIPRJMOD}/packages3D/781710003.step" (offset (xyz 1.25 -2.4 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
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
