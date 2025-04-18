module.exports = {
  params: {
    designator: 'SW_SPDT',
    side: 'F',
    reversible: false,
    show_3d: false,
    P1: {type: 'net', value: 'P1'}, // undefined, // change to undefined as needed
    P2: {type: 'net', value: 'P2'}, // undefined, // change to undefined as needed
    P3: {type: 'net', value: 'P3'}, // undefined, // change to undefined as needed
  },
  body: p => {
    let fp_name="TB2086_SMD:SW_SPDT_PCM12"
    if (p.reversible) {
        fp_name += "_reversible";
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "${p.side}.Cu")
        (descr "Ultraminiature Surface Mount Slide Switch, right-angle, https://www.ckswitches.com/media/1424/pcm.pdf")
        (property "Reference" "${p.ref}" (at 0 -3.2 ${180 + p.rot}) (layer "${p.side}.SilkS") ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_text user "\${VALUE}" (at -6.25 0.25 ${180 + p.rot}) (layer "F.SilkS") (hide yes)  (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_pads = `
        (pad "" smd rect (at -3.65 -0.78 ${p.rot}) (size 1.4 0.8) (layers "F.Cu" "F.Paste" "F.Mask") )
        (pad "" smd rect (at -3.65 1.43 ${p.rot}) (size 1.4 0.8) (layers "F.Cu" "F.Paste" "F.Mask") )
        (pad "" smd rect (at 3.65 -0.78 ${p.rot}) (size 1.4 0.8) (layers "F.Cu" "F.Paste" "F.Mask") )
        (pad "" smd rect (at 3.65 1.43 ${p.rot}) (size 1.4 0.8) (layers "F.Cu" "F.Paste" "F.Mask") )
        (pad "1" smd rect (at -2.25 -1.43 ${p.rot}) (size 0.8 2) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.P1})
        (pad "2" smd rect (at 0.75 -1.43 ${p.rot}) (size 0.8 2) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.P2})
        (pad "3" smd rect (at 2.25 -1.43 ${p.rot}) (size 0.8 2) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.P3})
    `
    const front_pads_rev = `
        (pad "2" smd roundrect (at 0.2 -1.43 ${p.rot}) (size 0.5 0.25) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45)  ${p.P2})
    `
    const front_fabrication = `
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_line (start -3.35 -1) (end -3.35 1.6) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -3.35 1.6) (end 3.35 1.6) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -1.4 1.65) (end -1.4 2.95) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -1.4 2.95) (end -1.2 3.15) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -1.2 3.15) (end -0.35 3.15) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -0.35 3.15) (end -0.15 2.95) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -0.15 2.95) (end -0.1 2.9) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -0.1 2.9) (end -0.1 1.6) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 3.35 -1) (end -3.35 -1) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 3.35 1.6) (end 3.35 -1) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_text user "${p.ref}" (at 0 -3.2 ${180 + p.rot}) (layer "F.Fab") (hide yes) (uuid "78497502-3ead-4574-8e28-1dc72e219299") (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -4.4 -2.45) (end 4.4 -2.45) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -4.4 2.1) (end -4.4 -2.45) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -1.65 2.1) (end -4.4 2.1) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -1.65 3.4) (end -1.65 2.1) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 1.65 2.1) (end 1.65 3.4) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 1.65 3.4) (end -1.65 3.4) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 4.4 -2.45) (end 4.4 2.1) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 4.4 2.1) (end 1.65 2.1) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
    `
    const front_paste = `
    `
    const pads = `
    `
    const pads_rev = `
        (pad "2" thru_hole circle (at 0 -1.43 ${p.rot}) (size 0.5 0.5) (drill 0.3) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P2})
    `
    const back_silkscreen = `
        (property "Value" "PWR" (at 6.25 0.25 ${180 + p.rot}) (layer "B.SilkS") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
    `
    const back_pads = `
        (pad "" smd rect (at -3.65 -0.78 ${p.rot}) (size 1.4 0.8) (layers "B.Cu" "B.Paste" "B.Mask") )
        (pad "" smd rect (at -3.65 1.43 ${p.rot}) (size 1.4 0.8) (layers "B.Cu" "B.Paste" "B.Mask") )
        (pad "" np_thru_hole circle (at -1.5 0.33 ${p.rot}) (size 0.8 0.8) (drill 0.8) (layers "F&B.Cu" "*.Mask") )
        (pad "" np_thru_hole circle (at 1.5 0.33 ${p.rot}) (size 0.8 0.8) (drill 0.8) (layers "F&B.Cu" "*.Mask") )
        (pad "" smd rect (at 3.65 -0.78 ${p.rot}) (size 1.4 0.8) (layers "B.Cu" "B.Paste" "B.Mask") )
        (pad "" smd rect (at 3.65 1.43 ${p.rot}) (size 1.4 0.8) (layers "B.Cu" "B.Paste" "B.Mask") )
        (pad "1" smd rect (at 2.25 -1.43 ${p.rot}) (size 0.8 2) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.P1})
        (pad "2" smd rect (at -0.75 -1.43 ${p.rot}) (size 0.8 2) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.P2})
        (pad "3" smd rect (at -2.25 -1.43 ${p.rot}) (size 0.8 2) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.P3})
    `
    const back_pads_rev = `
        (pad "2" smd roundrect (at -0.25 -1.43 ${p.rot}) (size 0.5 0.25) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45)  ${p.P2})
    `
    const back_fabrication = `
        (fp_line (start -3.35 -1) (end 3.35 -1) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start -3.35 1.6) (end -3.35 -1) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 0.1 2.9) (end 0.1 1.6) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 0.15 2.95) (end 0.1 2.9) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 0.35 3.15) (end 0.15 2.95) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 1.2 3.15) (end 0.35 3.15) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 1.4 1.65) (end 1.4 2.95) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 1.4 2.95) (end 1.2 3.15) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 3.35 -1) (end 3.35 1.6) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 3.35 1.6) (end -3.35 1.6) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
    `
    const back_mask = `
    `
    const back_courtyard = `
        (fp_line (start -4.4 -2.45) (end -4.4 2.1) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -4.4 2.1) (end -1.65 2.1) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -1.65 2.1) (end -1.65 3.4) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -1.65 3.4) (end 1.65 3.4) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 1.65 2.1) (end 4.4 2.1) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 1.65 3.4) (end 1.65 2.1) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 4.4 -2.45) (end -4.4 -2.45) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 4.4 2.1) (end 4.4 -2.45) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
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

    let offset = "(xyz 0 0 0)"
    let rotate = "(xyz 0 0 0)"
    if (p.side == "B") {
        offset = "(xyz 0 0 -1.6)"
        rotate = "(xyz 0 180 0)"
    }

    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/SW_SPDT_PCM12.wrl" (offset ${offset}) (scale (xyz 1 1 1)) (rotate ${rotate}))
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

    if (p.reversible) {
        final += front_pads_rev;
        final += pads_rev;
        final += back_pads_rev;
    }

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
