module.exports = {
  params: {
    designator: 'JP',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,     // delete if not needed
    P3: {type: 'net', undefined}, // change to undefined as needed
    P1: {type: 'net', undefined}, // change to undefined as needed
    P2: {type: 'net', undefined}, // change to undefined as needed
  },
  body: p => {
    let fp_name="TB2086_MISC:SolderJumper-3_P1.3mm_Open_RoundedPad1.0x1.5mm"
    if (p.reversible) {
        fp_name += "_rev";
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (tags "solder jumper open")
        (property "Reference" "${p.ref}" (at 0 -1.8 ${0 + p.rot}) (layer "${p.side}.SilkS") (hide yes)  (effects (font (size 1 1) (thickness 0.15))))
        (attr exclude_from_pos_files exclude_from_bom)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_line (start -2.05 0.3) (end -2.05 -0.3) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -1.5 1.5) (end -0.9 1.5) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -1.4 -1) (end 1.4 -1) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -1.2 1.2) (end -1.5 1.5) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -1.2 1.2) (end -0.9 1.5) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start 1.4 1) (end -1.4 1) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start 2.05 -0.3) (end 2.05 0.3) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_arc (start -2.05 -0.3) (mid -1.844975 -0.794975) (end -1.35 -1) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_arc (start -1.35 1) (mid -1.844975 0.794975) (end -2.05 0.3) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_arc (start 1.35 -1) (mid 1.844975 -0.794975) (end 2.05 -0.3) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_arc (start 2.05 0.3) (mid 1.844975 0.794975) (end 1.35 1) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
    `
    const front_pads = `
        (pad "1" smd custom (at -1.3 0 ${p.rot}) (size 1 0.5) (layers "F.Cu" "F.Mask") (zone_connect 2) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_circle (center 0 0.25) (end 0.5 0.25) (width 0) (fill yes)) (gr_circle (center 0 -0.25) (end 0.5 -0.25) (width 0) (fill yes)) (gr_poly (pts (xy 0.55 0.75) (xy 0 0.75) (xy 0 -0.75) (xy 0.55 -0.75)) (width 0) (fill yes)))  ${p.P1})
        (pad "2" smd rect (at 0 0 ${p.rot}) (size 1 1.5) (layers "F.Cu" "F.Mask")  ${p.P2})
        (pad "3" smd custom (at 1.3 0 ${p.rot}) (size 1 0.5) (layers "F.Cu" "F.Mask") (zone_connect 2) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_circle (center 0 0.25) (end 0.5 0.25) (width 0) (fill yes)) (gr_circle (center 0 -0.25) (end 0.5 -0.25) (width 0) (fill yes)) (gr_poly (pts (xy 0 0.75) (xy -0.55 0.75) (xy -0.55 -0.75) (xy 0 -0.75)) (width 0) (fill yes)))  ${p.P3})
    `
    const front_fabrication = `
        (property "Value" "${fp_name}" (at 0 1.9 ${0 + p.rot}) (layer "F.Fab") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -2.3 -1.25) (end -2.3 1.25) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -2.3 -1.25) (end 2.3 -1.25) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 2.3 1.25) (end -2.3 1.25) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 2.3 1.25) (end 2.3 -1.25) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
    `
    const front_paste = `
    `
    const pads = `
        (descr "SMD Solder 3-pad Jumper, 1x1.5mm rounded Pads, 0.3mm gap, open")
    `
    const back_silkscreen = `
        (fp_line (start -2.05 -0.3) (end -2.05 0.3) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start -1.4 1) (end 1.4 1) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 1.2 1.2) (end 0.9 1.5) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 1.2 1.2) (end 1.5 1.5) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 1.4 -1) (end -1.4 -1) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 1.5 1.5) (end 0.9 1.5) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 2.05 0.3) (end 2.05 -0.3) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_arc (start -2.05 -0.3) (mid -1.844975 -0.794975) (end -1.35 -1) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_arc (start -1.35 1) (mid -1.844975 0.794975) (end -2.05 0.3) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_arc (start 1.35 -1) (mid 1.844975 -0.794975) (end 2.05 -0.3) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_arc (start 2.05 0.3) (mid 1.844975 0.794975) (end 1.35 1) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
    `
    const back_pads = `
        (pad "1" smd custom (at -1.3 0 ${p.rot}) (size 1 0.5) (layers "B.Cu" "B.Mask") (zone_connect 2) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_circle (center 0 0.25) (end -0.5 0.25) (width 0) (fill yes)) (gr_circle (center 0 -0.25) (end -0.5 -0.25) (width 0) (fill yes)) (gr_poly (pts (xy 0 0.75) (xy 0.55 0.75) (xy 0.55 -0.75) (xy 0 -0.75)) (width 0) (fill yes)))  ${p.P1})
        (pad "2" smd rect (at 0 0 ${p.rot}) (size 1 1.5) (layers "B.Cu" "B.Mask")  ${p.P2})
        (pad "3" smd custom (at 1.3 0 ${p.rot}) (size 1 0.5) (layers "B.Cu" "B.Mask") (zone_connect 2) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_circle (center 0 0.25) (end -0.5 0.25) (width 0) (fill yes)) (gr_circle (center 0 -0.25) (end -0.5 -0.25) (width 0) (fill yes)) (gr_poly (pts (xy -0.55 0.75) (xy 0 0.75) (xy 0 -0.75) (xy -0.55 -0.75)) (width 0) (fill yes)))  ${p.P3})
    `
    const back_fabrication = `
    `
    const back_mask = `
    `
    const back_courtyard = `
        (fp_line (start -2.3 1.25) (end -2.3 -1.25) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -2.3 1.25) (end 2.3 1.25) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 2.3 -1.25) (end -2.3 -1.25) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 2.3 -1.25) (end 2.3 1.25) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
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
    final += model;
    final += standard_closing;

    return final
  }
}
