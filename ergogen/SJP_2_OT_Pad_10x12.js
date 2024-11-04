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
    let fp_name="SolderJumper-2_P1.3mm_Open_TrianglePad1.0x1.2mm"
    if (p.reversible) {
        fp_name = "TB2086_MISC:" + ${fp_name} + "_rev";
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20221018)
        (generator pcbnew)
        (layer "F.Cu")
        (descr "SMD Solder Jumper, 1x1.5mm Triangular Pads, 0.3mm gap, open")
        (tags "solder jumper open")
        (attr exclude_from_pos_files exclude_from_bom)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_text reference "${p.ref}" (at 0 -1.8 ${p.rot}) (layer "F.SilkS") hide (effects (font (size 1 1) (thickness 0.15))) (tstamp b9c83bb8-4f46-406b-bb8c-95f6709eb55c))
    `
    const front_pads = `
        (pad "1" smd custom (at 0.4334 0.0002 ${270 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (tstamp f483a99d-2924-46d4-b5b0-97cbf0e23508) ${p.P1})
        (pad "2" smd custom (at -0.5826 0.0002 ${270 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0) (fill yes))) (tstamp 968d8ede-ebdd-4798-b81c-4ce0c0a39be3) ${p.P2})
    `
    const front_fabrication = `
        (fp_text value "SolderJumper-2_P1.3mm_Open_TrianglePad1.0x1.2mm_rev" (at 0 1.9 ${p.rot}) (layer "F.Fab") (effects (font (size 1 1) (thickness 0.15))) (tstamp a752f8c1-d50d-4fd4-83d1-e4b7c9358d47))
    `
    const front_mask = `
        (fp_poly (pts (xy 0.709 -0.505) (xy 0.709 0.511) (xy -0.307 0.511) (xy -0.307 -0.505)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (tstamp 68552916-31a7-4369-9a47-1ece295869f0))
    `
    const front_courtyard = `
        (fp_line (start -1.008 -0.85) (end -1.008 0.85) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (tstamp 473bb80a-c3af-4cc0-8d83-6b0cd7143ec4))
        (fp_line (start -1.008 -0.85) (end 1.008 -0.85) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (tstamp 36eb4a4d-8aee-4d0e-8aa8-9b9dd142818b))
        (fp_line (start 1.008 0.85) (end -1.008 0.85) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (tstamp 2fb2b89c-81f1-48ea-8e24-6ee974bac911))
        (fp_line (start 1.008 0.85) (end 1.008 -0.85) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (tstamp 885a2927-fe5c-4a37-90ee-0623cdf8972a))
    `
    const front_paste = `
    `
    const pads = `
    `
    const back_silkscreen = `
    `
    const back_pads = `
        (pad "1" smd custom (at 0.4334 0.0002 ${270 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (tstamp 106f3f18-10c7-4e18-aa7f-7534bcb78068) ${p.P1})
        (pad "2" smd custom (at -0.5826 0.0002 ${270 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0) (fill yes))) (tstamp 0bc7c2ba-0688-4ca1-807d-2323e618da72) ${p.P2})
    `
    const back_fabrication = `
    `
    const back_mask = `
        (fp_poly (pts (xy 0.709 -0.505) (xy 0.709 0.511) (xy -0.307 0.511) (xy -0.307 -0.505)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (tstamp 90d3a401-cfcb-4a08-b1e6-7f544eb851ff))
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
