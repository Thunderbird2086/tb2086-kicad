module.exports = {
  params: {
    designator: 'JP',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,     // delete if not needed
    P2: {type: 'net', value: undefined}, // change to undefined as needed
    P3: {type: 'net', value: undefined}, // change to undefined as needed
    P1: {type: 'net', value: undefined}, // change to undefined as needed
  },
  body: p => {
    let fp_name="SolderJumper-3_P1.3mm_Bridged2Bar12_RoundedPad1.0x1.5mm"
    if (p.reversible) {
        fp_name = "TB2086_MISC:" + fp_name + "_rev";
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20221018)
        (generator pcbnew)
        (layer "F.Cu")
        (tags "net tie solder jumper bridged")
        (attr exclude_from_pos_files exclude_from_bom)
        (fp_text reference "${p.ref}" (at 0 -1.8 ${p.rot}) (layer "${p.side}.SilkS") hide (effects (font (size 1 1) (thickness 0.15))) )
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
        (fp_poly (pts (xy -0.9 -0.6) (xy -0.4 -0.6) (xy -0.4 -0.2) (xy -0.9 -0.2)) (stroke (width 0) (type solid)) (fill solid) (layer "F.Cu") )
        (fp_poly (pts (xy -0.9 0.2) (xy -0.4 0.2) (xy -0.4 0.6) (xy -0.9 0.6)) (stroke (width 0) (type solid)) (fill solid) (layer "F.Cu") )
        (pad "1" smd custom (at -1.3 0 ${p.rot}) (size 1 0.5) (layers "F.Cu" "F.Mask") (zone_connect 2) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_circle (center 0 0.25) (end 0.5 0.25) (width 0) (fill yes)) (gr_circle (center 0 -0.25) (end 0.5 -0.25) (width 0) (fill yes)) (gr_poly (pts (xy 0.55 0.75) (xy 0 0.75) (xy 0 -0.75) (xy 0.55 -0.75)) (width 0) (fill yes)))  ${p.P1})
        (pad "2" smd rect (at 0 0 ${p.rot}) (size 1 1.5) (layers "F.Cu" "F.Mask")  ${p.P2})
        (pad "3" smd custom (at 1.3 0 ${p.rot}) (size 1 0.5) (layers "F.Cu" "F.Mask") (zone_connect 2) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_circle (center 0 0.25) (end 0.5 0.25) (width 0) (fill yes)) (gr_circle (center 0 -0.25) (end 0.5 -0.25) (width 0) (fill yes)) (gr_poly (pts (xy 0 0.75) (xy -0.55 0.75) (xy -0.55 -0.75) (xy 0 -0.75)) (width 0) (fill yes)))  ${p.P3})
    `
    const front_fabrication = `
        (fp_text value "${fp_name}" (at 0 1.9 ${p.rot}) (layer "F.Fab") (effects (font (size 1 1) (thickness 0.15))))
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
        (descr "SMD Solder 3-pad Jumper, 1x1.5mm rounded Pads, 0.3mm gap, pads 1-2 Bridged2Bar with 2 copper strip")
        (net_tie_pad_groups "1, 2, 3")
    `
    const back_silkscreen = `
        (fp_line (start -2.05 -0.3) (end -2.05 0.3) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start -1.4 1) (end 1.4 1) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start -1.2 1.2) (end -1.5 1.5) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start -1.2 1.2) (end -0.9 1.5) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start -0.9 1.5) (end -1.5 1.5) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 1.4 -1) (end -1.4 -1) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 2.05 0.3) (end 2.05 -0.3) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_arc (start -2.05 -0.3) (mid -1.844975 -0.794975) (end -1.35 -1) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_arc (start -1.35 1) (mid -1.844975 0.794975) (end -2.05 0.3) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_arc (start 1.35 -1) (mid 1.844975 -0.794975) (end 2.05 -0.3) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_arc (start 2.05 0.3) (mid 1.844975 0.794975) (end 1.35 1) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
    `
    const back_pads = `
        (fp_poly (pts (xy -0.9 -0.2) (xy -0.4 -0.2) (xy -0.4 -0.6) (xy -0.9 -0.6)) (stroke (width 0) (type solid)) (fill solid) (layer "B.Cu") )
        (fp_poly (pts (xy -0.9 0.6) (xy -0.4 0.6) (xy -0.4 0.2) (xy -0.9 0.2)) (stroke (width 0) (type solid)) (fill solid) (layer "B.Cu") )
        (pad "1" smd custom (at -1.3 0 ${180 + p.rot}) (size 1 0.5) (layers "B.Cu" "B.Mask") (zone_connect 2) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_circle (center 0 0.25) (end -0.5 0.25) (width 0) (fill yes)) (gr_circle (center 0 -0.25) (end -0.5 -0.25) (width 0) (fill yes)) (gr_poly (pts (xy -0.55 0.75) (xy 0 0.75) (xy 0 -0.75) (xy -0.55 -0.75)) (width 0) (fill yes)))  ${p.P1})
        (pad "2" smd rect (at 0 0 ${180 + p.rot}) (size 1 1.5) (layers "B.Cu" "B.Mask")  ${p.P2})
        (pad "3" smd custom (at 1.3 0 ${180 + p.rot}) (size 1 0.5) (layers "B.Cu" "B.Mask") (zone_connect 2) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_circle (center 0 0.25) (end -0.5 0.25) (width 0) (fill yes)) (gr_circle (center 0 -0.25) (end -0.5 -0.25) (width 0) (fill yes)) (gr_poly (pts (xy 0 0.75) (xy 0.55 0.75) (xy 0.55 -0.75) (xy 0 -0.75)) (width 0) (fill yes)))  ${p.P3})
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
