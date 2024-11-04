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
        fp_name = "TB2086_MISC:" + ${fp_name} + "_rev";
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20221018)
        (generator pcbnew)
        (layer "F.Cu")
        (tags "net tie solder jumper bridged")
        (attr exclude_from_pos_files exclude_from_bom)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_text reference "${p.ref}" (at 0 -1.8 ${p.rot}) (layer "F.SilkS") hide (effects (font (size 1 1) (thickness 0.15))) (tstamp 72926832-b657-495c-9bf6-1bc19dd97510))
        (fp_line (start -2.05 0.3) (end -2.05 -0.3) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 1a549ab0-caf7-4d11-8ceb-4583d78ce193))
        (fp_line (start -1.5 1.5) (end -0.9 1.5) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 0bd2859f-c2f6-4b71-a2a6-5c238dde34e2))
        (fp_line (start -1.4 -1) (end 1.4 -1) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 1ccd4e03-ed8c-4e45-9c6c-120f1652852c))
        (fp_line (start -1.2 1.2) (end -1.5 1.5) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp e60125d4-8ce2-421b-8c43-876af96fe9f5))
        (fp_line (start -1.2 1.2) (end -0.9 1.5) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 4fa05fa0-3479-413b-b027-8ddd171d26cb))
        (fp_line (start 1.4 1) (end -1.4 1) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 3e3651f1-e7de-4a67-89ca-c22879c340d8))
        (fp_line (start 2.05 -0.3) (end 2.05 0.3) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 8c447bd2-1f55-4848-8d87-2ef6c27ae918))
        (fp_arc (start -2.05 -0.3) (mid -1.844975 -0.794975) (end -1.35 -1) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp cf52cc22-f516-4f79-87f1-c8627859d96b))
        (fp_arc (start -1.35 1) (mid -1.844975 0.794975) (end -2.05 0.3) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 55e9575a-d795-4c94-9e52-e98230ef3a4a))
        (fp_arc (start 1.35 -1) (mid 1.844975 -0.794975) (end 2.05 -0.3) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 248f4ab1-2d5b-4d60-b38e-3e1ab1ebc3cb))
        (fp_arc (start 2.05 0.3) (mid 1.844975 0.794975) (end 1.35 1) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp c55b15b1-d28e-468b-ae8a-1155f4c0a0cb))
    `
    const front_pads = `
        (fp_poly (pts (xy -0.9 -0.6) (xy -0.4 -0.6) (xy -0.4 -0.2) (xy -0.9 -0.2)) (stroke (width 0) (type solid)) (fill solid) (layer "F.Cu") (tstamp 03b71dcb-729a-4483-b065-e6de03d5f2c6))
        (fp_poly (pts (xy -0.9 0.2) (xy -0.4 0.2) (xy -0.4 0.6) (xy -0.9 0.6)) (stroke (width 0) (type solid)) (fill solid) (layer "F.Cu") (tstamp 0d6fcf97-8338-4515-824b-348958865365))
        (pad "1" smd custom (at -1.3 0 ${p.rot}) (size 1 0.5) (layers "F.Cu" "F.Mask") (zone_connect 2) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_circle (center 0 0.25) (end 0.5 0.25) (width 0) (fill yes)) (gr_circle (center 0 -0.25) (end 0.5 -0.25) (width 0) (fill yes)) (gr_poly (pts (xy 0.55 0.75) (xy 0 0.75) (xy 0 -0.75) (xy 0.55 -0.75)) (width 0) (fill yes))) (tstamp 2390a2fa-6c26-4034-b454-ad6a4b1c6410) ${p.P1})
        (pad "2" smd rect (at 0 0 ${p.rot}) (size 1 1.5) (layers "F.Cu" "F.Mask") (tstamp e081c470-9841-4614-a0bc-6cfd88dc7479) ${p.P2})
        (pad "3" smd custom (at 1.3 0 ${p.rot}) (size 1 0.5) (layers "F.Cu" "F.Mask") (zone_connect 2) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_circle (center 0 0.25) (end 0.5 0.25) (width 0) (fill yes)) (gr_circle (center 0 -0.25) (end 0.5 -0.25) (width 0) (fill yes)) (gr_poly (pts (xy 0 0.75) (xy -0.55 0.75) (xy -0.55 -0.75) (xy 0 -0.75)) (width 0) (fill yes))) (tstamp 5c32e2f9-3879-4d68-83bb-b55bf9eca3f9) ${p.P3})
    `
    const front_fabrication = `
        (fp_text value "${fp_name}" (at 0 1.9 ${p.rot}) (layer "F.Fab") (effects (font (size 1 1) (thickness 0.15))) (tstamp a31ee0f2-1d38-4b27-90f6-bbe48192db6e))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -2.3 -1.25) (end -2.3 1.25) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (tstamp 4d5f2f4e-2168-4c22-b095-510b900a2143))
        (fp_line (start -2.3 -1.25) (end 2.3 -1.25) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (tstamp 5331c594-772a-41d5-adb3-75d3872b8902))
        (fp_line (start 2.3 1.25) (end -2.3 1.25) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (tstamp 2a1dc3c2-60e0-41a6-a100-b950ef42faa0))
        (fp_line (start 2.3 1.25) (end 2.3 -1.25) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (tstamp f2dd39f0-13ee-4aa1-a5c7-d12f06dd9467))
    `
    const front_paste = `
    `
    const pads = `
        (descr "SMD Solder 3-pad Jumper, 1x1.5mm rounded Pads, 0.3mm gap, pads 1-2 Bridged2Bar with 2 copper strip")
        (net_tie_pad_groups "1, 2, 3")
    `
    const back_silkscreen = `
        (fp_text reference "${p.ref}" (at 0 -1.8 ${p.rot}) (layer "B.SilkS") hide (effects (font (size 1 1) (thickness 0.15)) (justify mirror)) (tstamp 72926832-b657-495c-9bf6-1bc19dd97510))
        (fp_line (start -2.05 -0.3) (end -2.05 0.3) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (tstamp fea3a642-27ae-43f6-8fed-01d6207bdad6))
        (fp_line (start -1.4 1) (end 1.4 1) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (tstamp 70e695c8-8d5f-4722-be90-70108d9e9dc1))
        (fp_line (start -1.2 1.2) (end -1.5 1.5) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (tstamp c1dc468f-8022-4654-bc3d-6ddd0fb932d9))
        (fp_line (start -1.2 1.2) (end -0.9 1.5) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (tstamp 2bea283b-6e23-455c-a119-a8c0f42ade4c))
        (fp_line (start -0.9 1.5) (end -1.5 1.5) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (tstamp cbf83f1e-3184-4d1a-9b43-e9d1f594baee))
        (fp_line (start 1.4 -1) (end -1.4 -1) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (tstamp 32e73afe-d377-4f55-8099-92b627bcffaa))
        (fp_line (start 2.05 0.3) (end 2.05 -0.3) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (tstamp b6fb367c-600e-41d5-bae2-a3c0f0bc0644))
        (fp_arc (start -2.05 -0.3) (mid -1.844975 -0.794975) (end -1.35 -1) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (tstamp 38832e49-c043-492e-8d84-05c3087d680f))
        (fp_arc (start -1.35 1) (mid -1.844975 0.794975) (end -2.05 0.3) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (tstamp 05a3b91b-a910-4bbe-98b7-724375ab7665))
        (fp_arc (start 1.35 -1) (mid 1.844975 -0.794975) (end 2.05 -0.3) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (tstamp b255caf6-42f0-4203-a5a5-a4e4dd945fcb))
        (fp_arc (start 2.05 0.3) (mid 1.844975 0.794975) (end 1.35 1) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (tstamp e8fec510-7985-4d57-bd4d-971d9f3e0cf9))
    `
    const back_pads = `
        (fp_poly (pts (xy -0.9 -0.2) (xy -0.4 -0.2) (xy -0.4 -0.6) (xy -0.9 -0.6)) (stroke (width 0) (type solid)) (fill solid) (layer "B.Cu") (tstamp 80b8d672-dfb9-4cb8-96b1-4ed040ccc8cb))
        (fp_poly (pts (xy -0.9 0.6) (xy -0.4 0.6) (xy -0.4 0.2) (xy -0.9 0.2)) (stroke (width 0) (type solid)) (fill solid) (layer "B.Cu") (tstamp 2f38ffc3-6f97-436c-b498-a2e6c354a1d4))
        (pad "1" smd custom (at -1.3 0 ${180 + p.rot}) (size 1 0.5) (layers "B.Cu" "B.Mask") (zone_connect 2) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_circle (center 0 0.25) (end -0.5 0.25) (width 0) (fill yes)) (gr_circle (center 0 -0.25) (end -0.5 -0.25) (width 0) (fill yes)) (gr_poly (pts (xy -0.55 0.75) (xy 0 0.75) (xy 0 -0.75) (xy -0.55 -0.75)) (width 0) (fill yes))) (tstamp be599d35-4169-44b8-8f27-88a614a6dfc0) ${p.P1})
        (pad "2" smd rect (at 0 0 ${180 + p.rot}) (size 1 1.5) (layers "B.Cu" "B.Mask") (tstamp 34dba132-7bdf-4975-acad-366921c025ca) ${p.P2})
        (pad "3" smd custom (at 1.3 0 ${180 + p.rot}) (size 1 0.5) (layers "B.Cu" "B.Mask") (zone_connect 2) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_circle (center 0 0.25) (end -0.5 0.25) (width 0) (fill yes)) (gr_circle (center 0 -0.25) (end -0.5 -0.25) (width 0) (fill yes)) (gr_poly (pts (xy 0 0.75) (xy 0.55 0.75) (xy 0.55 -0.75) (xy 0 -0.75)) (width 0) (fill yes))) (tstamp d97a03a6-c74d-4198-b92b-ac3f6141b593) ${p.P3})
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
