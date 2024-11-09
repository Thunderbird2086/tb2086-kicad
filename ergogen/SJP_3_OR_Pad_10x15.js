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
    let fp_name="SolderJumper-3_P1.3mm_Open_RoundedPad1.0x1.5mm"
    if (p.reversible) {
        fp_name = "TB2086_MISC:" + fp_name + "_rev";
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (tags "solder jumper open")
        (attr exclude_from_pos_files exclude_from_bom)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (property "Reference" "${p.ref}" (at 0 -1.8 ${0 + p.rot}) (layer "F.SilkS") (hide yes) (uuid "931a7f9a-f334-4e86-8a5b-d4636983859a") (effects (font (size 1 1) (thickness 0.15))))
        (fp_line (start -2.05 0.3) (end -2.05 -0.3) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 78cfe39c-283d-428d-b5c2-ec00fc719d32))
        (fp_line (start -1.5 1.5) (end -0.9 1.5) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp c27bd981-aac2-4bdd-a421-7229f3378587))
        (fp_line (start -1.4 -1) (end 1.4 -1) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 56f6ae66-d35f-41f5-9e47-7f66a176f832))
        (fp_line (start -1.2 1.2) (end -1.5 1.5) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 990b050f-8d63-4468-8307-e12404a9faf6))
        (fp_line (start -1.2 1.2) (end -0.9 1.5) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 73a62363-6eae-4593-96bf-6e4de39f5a55))
        (fp_line (start 1.4 1) (end -1.4 1) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 0cea505e-6386-480e-b9ce-edd39838a7bf))
        (fp_line (start 2.05 -0.3) (end 2.05 0.3) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 2d4621d3-e2ee-4c40-9764-a8cb003fafaf))
        (fp_arc (start -2.05 -0.3) (mid -1.844975 -0.794975) (end -1.35 -1) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 141defa7-6f0f-4a7e-a0b7-154a3a20a0d9))
        (fp_arc (start -1.35 1) (mid -1.844975 0.794975) (end -2.05 0.3) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 8cdc5b3d-0965-4b69-a05b-e578764331a9))
        (fp_arc (start 1.35 -1) (mid 1.844975 -0.794975) (end 2.05 -0.3) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 094d4c38-9e6a-4278-b9fc-c371acd48c84))
        (fp_arc (start 2.05 0.3) (mid 1.844975 0.794975) (end 1.35 1) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp ad182b45-3bb2-4152-9f9d-561a72271c46))
    `
    const front_pads = `
        (pad "1" smd custom (at -1.3 0 ${p.rot}) (size 1 0.5) (layers "F.Cu" "F.Mask") (zone_connect 2) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_circle (center 0 0.25) (end 0.5 0.25) (width 0) (fill yes)) (gr_circle (center 0 -0.25) (end 0.5 -0.25) (width 0) (fill yes)) (gr_poly (pts (xy 0.55 0.75) (xy 0 0.75) (xy 0 -0.75) (xy 0.55 -0.75)) (width 0) (fill yes))) (uuid "559c351f-d0b1-4069-b402-308f5ce7092d") ${p.P1})
        (pad "2" smd rect (at 0 0 ${p.rot}) (size 1 1.5) (layers "F.Cu" "F.Mask") (uuid "e089c6a0-c9bb-4ad9-a768-0469208d1120") ${p.P2})
        (pad "3" smd custom (at 1.3 0 ${p.rot}) (size 1 0.5) (layers "F.Cu" "F.Mask") (zone_connect 2) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_circle (center 0 0.25) (end 0.5 0.25) (width 0) (fill yes)) (gr_circle (center 0 -0.25) (end 0.5 -0.25) (width 0) (fill yes)) (gr_poly (pts (xy 0 0.75) (xy -0.55 0.75) (xy -0.55 -0.75) (xy 0 -0.75)) (width 0) (fill yes))) (uuid "13664a32-b60c-49ae-979c-ea68904f0301") ${p.P3})
    `
    const front_fabrication = `
        (property "Value" "${fp_name}" (at 0 1.9 ${0 + p.rot}) (layer "F.Fab") (uuid "9070ce28-1a08-48ab-9dec-e56dd22ea974") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "8e437c7f-0f94-4a1b-85fc-318ecd54777c") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "d1bc8846-4932-4c1e-8dcb-bc9a38c57d01") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "50612b4a-f12b-4ed1-ac7e-b1439088bf3a") (effects (font (size 1.27 1.27) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -2.3 -1.25) (end -2.3 1.25) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "ae4a1575-8e1c-4f49-a5f8-fa355c7aa13d"))
        (fp_line (start -2.3 -1.25) (end 2.3 -1.25) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "0057fb2c-2d87-483b-835b-278b45043d7c"))
        (fp_line (start 2.3 1.25) (end -2.3 1.25) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "dd8be6f6-59a4-4ef0-9ad4-077fe806fb96"))
        (fp_line (start 2.3 1.25) (end 2.3 -1.25) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "dd32a5c8-19c7-4429-9596-0002d6d9ea81"))
    `
    const front_paste = `
    `
    const pads = `
        (descr "SMD Solder 3-pad Jumper, 1x1.5mm rounded Pads, 0.3mm gap, open")
    `
    const back_silkscreen = `
        (fp_line (start -2.05 -0.3) (end -2.05 0.3) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "edfc88e9-1762-46c0-b7bf-77a72b5773c9"))
        (fp_line (start -1.4 1) (end 1.4 1) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "e109e624-a975-4bb9-a0e9-821951ef8bd9"))
        (fp_line (start 1.2 1.2) (end 0.9 1.5) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "2e7f3a33-4149-4cfa-8d27-f90922d2a139"))
        (fp_line (start 1.2 1.2) (end 1.5 1.5) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "2b576013-23d2-4627-b758-fefc9e56a751"))
        (fp_line (start 1.4 -1) (end -1.4 -1) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "447de2f5-6a77-44ef-8ed7-bd44a623c4f7"))
        (fp_line (start 1.5 1.5) (end 0.9 1.5) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "9c22461b-023f-448e-a9cd-23d12ef53b32"))
        (fp_line (start 2.05 0.3) (end 2.05 -0.3) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "c53f3402-2c54-4c94-b108-160ef3049c8c"))
        (fp_arc (start -2.05 -0.3) (mid -1.844975 -0.794975) (end -1.35 -1) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "82799940-6e12-466b-92d6-1e56f50b4e66"))
        (fp_arc (start -1.35 1) (mid -1.844975 0.794975) (end -2.05 0.3) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "1a604488-19a3-499e-afeb-07edf5208fdc"))
        (fp_arc (start 1.35 -1) (mid 1.844975 -0.794975) (end 2.05 -0.3) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "595ead1c-6161-4d32-8b8f-e3c8b13c3533"))
        (fp_arc (start 2.05 0.3) (mid 1.844975 0.794975) (end 1.35 1) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "de7c7d5c-5b78-47ed-99f5-ca6418d52a50"))
    `
    const back_pads = `
        (pad "1" smd custom (at -1.3 0 ${p.rot}) (size 1 0.5) (layers "B.Cu" "B.Mask") (zone_connect 2) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_circle (center 0 0.25) (end -0.5 0.25) (width 0) (fill yes)) (gr_circle (center 0 -0.25) (end -0.5 -0.25) (width 0) (fill yes)) (gr_poly (pts (xy 0 0.75) (xy 0.55 0.75) (xy 0.55 -0.75) (xy 0 -0.75)) (width 0) (fill yes))) (uuid "a193b1ba-1f7f-4404-bca3-ce4efe6da258") ${p.P1})
        (pad "2" smd rect (at 0 0 ${p.rot}) (size 1 1.5) (layers "B.Cu" "B.Mask") (uuid "a1eada2a-0424-449c-8ad7-8191450712ce") ${p.P2})
        (pad "3" smd custom (at 1.3 0 ${p.rot}) (size 1 0.5) (layers "B.Cu" "B.Mask") (zone_connect 2) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_circle (center 0 0.25) (end -0.5 0.25) (width 0) (fill yes)) (gr_circle (center 0 -0.25) (end -0.5 -0.25) (width 0) (fill yes)) (gr_poly (pts (xy -0.55 0.75) (xy 0 0.75) (xy 0 -0.75) (xy -0.55 -0.75)) (width 0) (fill yes))) (uuid "a2848d2e-6430-415c-975a-13ba7d5ad6a9") ${p.P3})
    `
    const back_fabrication = `
    `
    const back_mask = `
    `
    const back_courtyard = `
        (fp_line (start -2.3 1.25) (end -2.3 -1.25) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "f4d01567-a3b4-423a-b802-b995d19451e6"))
        (fp_line (start -2.3 1.25) (end 2.3 1.25) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "3f08aa0b-f783-4760-a9b8-f2fe35badaf1"))
        (fp_line (start 2.3 -1.25) (end -2.3 -1.25) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "a07704f5-a897-47f3-a4e3-4c2cc47b728e"))
        (fp_line (start 2.3 -1.25) (end 2.3 1.25) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "32e7a043-0265-4434-981c-87e2c67fbdec"))
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
