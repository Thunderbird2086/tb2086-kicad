module.exports = {
  params: {
    designator: 'JP',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,     // delete if not needed
    P2: {type: 'net', value: undefined}, // change to undefined as needed
    P1: {type: 'net', value: undefined}, // change to undefined as needed
  },
  body: p => {
    let fp_name="TB2086_MISC:SolderJumper-2_P1.3mm_Open_TrianglePad1.0x1.2mm"
    if (p.reversible) {
        fp_name += "_rev";
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20221018)
        (generator pcbnew)
        (layer "${p.side}.Cu")
        (descr "SMD Solder Jumper, 1x1.5mm Triangular Pads, 0.3mm gap, open")
        (tags "solder jumper open")
        (attr exclude_from_pos_files exclude_from_bom)
        (fp_text reference "${p.ref}" (at 0 -1.8 ${p.rot}) (layer "${p.side}.SilkS") ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))) )
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
    `
    const front_pads = `
        (pad "1" smd custom (at 0.4334 0.0002 ${270 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes)))  ${p.P1})
        (pad "2" smd custom (at -0.5826 0.0002 ${270 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0) (fill yes)))  ${p.P2})
    `
    const front_fabrication = `
        (fp_text value "SolderJumper-2_P1.3mm_Open_TrianglePad1.0x1.2mm_rev" (at 0 1.9 ${p.rot}) (layer "F.Fab") (effects (font (size 1 1) (thickness 0.15))) )
    `
    const front_mask = `
        (fp_poly (pts (xy 0.709 -0.505) (xy 0.709 0.511) (xy -0.307 0.511) (xy -0.307 -0.505)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
    `
    const front_courtyard = `
        (fp_line (start -1.008 -0.85) (end -1.008 0.85) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -1.008 -0.85) (end 1.008 -0.85) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 1.008 0.85) (end -1.008 0.85) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 1.008 0.85) (end 1.008 -0.85) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
    `
    const front_paste = `
    `
    const pads = `
    `
    const back_silkscreen = `
    `
    const back_pads = `
        (pad "1" smd custom (at 0.4334 0.0002 ${270 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes)))  ${p.P1})
        (pad "2" smd custom (at -0.5826 0.0002 ${270 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0) (fill yes)))  ${p.P2})
    `
    const back_fabrication = `
    `
    const back_mask = `
        (fp_poly (pts (xy 0.709 -0.505) (xy 0.709 0.511) (xy -0.307 0.511) (xy -0.307 -0.505)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
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
