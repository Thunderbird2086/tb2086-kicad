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
    let fp_name="SW_SPDT_PCM12"
    if (p.reversible) {
        fp_name = "TB2086_SMD:" + fp_name + "_reversible";
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (descr "Ultraminiature Surface Mount Slide Switch, right-angle, https://www.ckswitches.com/media/1424/pcm.pdf")
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_text user "\${VALUE}" (at -6.25 0.25 ${180 + p.rot}) (layer "F.SilkS") (hide yes) (uuid "562a8e27-6c96-4c08-a968-bf5b76fe8824") (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_pads = `
        (pad "" smd rect (at -3.65 -0.78 ${p.rot}) (size 1.4 0.8) (layers "F.Cu" "F.Paste" "F.Mask") (uuid "e461dcb3-206b-45d9-9ac4-3bd876c25165"))
        (pad "" smd rect (at -3.65 1.43 ${p.rot}) (size 1.4 0.8) (layers "F.Cu" "F.Paste" "F.Mask") (uuid "945bbbdd-f2ff-40aa-a0a2-9fd36fb5b871"))
        (pad "" smd rect (at 3.65 -0.78 ${p.rot}) (size 1.4 0.8) (layers "F.Cu" "F.Paste" "F.Mask") (uuid "b9f74f81-7bf7-4198-bbfe-93e394c9e2b4"))
        (pad "" smd rect (at 3.65 1.43 ${p.rot}) (size 1.4 0.8) (layers "F.Cu" "F.Paste" "F.Mask") (uuid "f5bc9b86-f5a2-444d-b28e-5ab47d408153"))
        (pad "1" smd rect (at -2.25 -1.43 ${p.rot}) (size 0.8 2) (layers "F.Cu" "F.Paste" "F.Mask") (uuid "8562797f-5557-409a-9701-b683b0a37891") ${p.P1})
        (pad "2" smd roundrect (at 0.2 -1.43 ${p.rot}) (size 0.5 0.25) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "a5c24f3c-3565-4345-9b77-49ab28e19eb7") ${p.P2})
        (pad "2" smd rect (at 0.75 -1.43 ${p.rot}) (size 0.8 2) (layers "F.Cu" "F.Paste" "F.Mask") (uuid "4983bb3e-0bfa-4ef6-a58c-ce13177b9816") ${p.P2})
        (pad "3" smd rect (at 2.25 -1.43 ${p.rot}) (size 0.8 2) (layers "F.Cu" "F.Paste" "F.Mask") (uuid "b5bd6b39-a3bc-46ca-9cce-18ca523ef84f") ${p.P3})
    `
    const front_fabrication = `
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "c6ca7d9b-85d6-4357-a10c-dfc2ac175692") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "695b989c-3db4-4434-ac51-b97f21f53daa") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "45b09725-6c3e-477a-8433-f7faf2dd18ea") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_line (start -3.35 -1) (end -3.35 1.6) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "9a02d959-a74b-4a30-a647-8f919629b76d"))
        (fp_line (start -3.35 1.6) (end 3.35 1.6) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "371e2c35-1dd3-4ab9-a165-5756dbc0abde"))
        (fp_line (start -1.4 1.65) (end -1.4 2.95) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "3eb90d46-ee2f-40c0-bb15-ec0160d3ccac"))
        (fp_line (start -1.4 2.95) (end -1.2 3.15) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "34d96c7a-4c2d-4a3d-b9d0-aab1c6c84687"))
        (fp_line (start -1.2 3.15) (end -0.35 3.15) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "8bc55030-6742-4760-9f54-010c69beaf55"))
        (fp_line (start -0.35 3.15) (end -0.15 2.95) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "c81737d7-0c5e-4094-a989-776c649b531b"))
        (fp_line (start -0.15 2.95) (end -0.1 2.9) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "7c75e424-5b04-487f-954b-e0e15d705b6f"))
        (fp_line (start -0.1 2.9) (end -0.1 1.6) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "84cb22d0-d583-4c84-b2a2-918aaaa9d538"))
        (fp_line (start 3.35 -1) (end -3.35 -1) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "2a44a067-2ee4-41be-81bb-14603465b8f4"))
        (fp_line (start 3.35 1.6) (end 3.35 -1) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "7f811798-61fe-4f03-923d-7ee287a48bff"))
        (fp_text user "${p.ref}" (at 0 -3.2 ${180 + p.rot}) (layer "F.Fab") (hide yes) (uuid "78497502-3ead-4574-8e28-1dc72e219299") (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (property "Reference" "${p.ref}" (at 0 -3.2 ${180 + p.rot}) (layer "F.CrtYd") (hide yes) (uuid "460e8d92-ca0c-4aa8-898e-3f5ec9e90fac") (effects (font (size 1 1) (thickness 0.15))))
        (fp_line (start -4.4 -2.45) (end 4.4 -2.45) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "49eb4543-1f1e-40c5-b21a-ee03f07861d7"))
        (fp_line (start -4.4 2.1) (end -4.4 -2.45) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "86ea3f74-e46f-417e-b3f0-02b49c369152"))
        (fp_line (start -1.65 2.1) (end -4.4 2.1) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "c181aebb-7082-4f1a-ac70-5a8da42acad0"))
        (fp_line (start -1.65 3.4) (end -1.65 2.1) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "a602bd05-77dd-42be-b3bd-2ca90099cc35"))
        (fp_line (start 1.65 2.1) (end 1.65 3.4) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "1cb97481-d5c5-438c-b4ee-7f6871fc5ed4"))
        (fp_line (start 1.65 3.4) (end -1.65 3.4) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "abd8c06c-118a-40c6-8524-2fe7d647101f"))
        (fp_line (start 4.4 -2.45) (end 4.4 2.1) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "e2149ef1-e1a6-40b9-b717-b63d3cf08711"))
        (fp_line (start 4.4 2.1) (end 1.65 2.1) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "a0f8915d-3b49-443e-b194-b65ecc191e72"))
    `
    const front_paste = `
    `
    const pads = `
        (pad "2" thru_hole circle (at 0 -1.43 ${p.rot}) (size 0.5 0.5) (drill 0.3) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "f5c9b5b0-98f3-41af-86d9-752158a29616") ${p.P2})
    `
    const back_silkscreen = `
        (property "Value" "PWR" (at 6.25 0.25 ${180 + p.rot}) (layer "B.SilkS") (hide yes) (uuid "8cf5db55-a2fc-4d51-aa84-3e3410b95d0e") (effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
    `
    const back_pads = `
        (pad "" smd rect (at -3.65 -0.78 ${p.rot}) (size 1.4 0.8) (layers "B.Cu" "B.Paste" "B.Mask") (uuid "9528510c-a2b9-43e1-a934-17ec9beb9427"))
        (pad "" smd rect (at -3.65 1.43 ${p.rot}) (size 1.4 0.8) (layers "B.Cu" "B.Paste" "B.Mask") (uuid "8085de64-7ff0-4d00-94c0-03d5dd75d74a"))
        (pad "" np_thru_hole circle (at -1.5 0.33 ${p.rot}) (size 0.8 0.8) (drill 0.8) (layers "F&B.Cu" "*.Mask") (uuid "1c8652a6-0d56-431d-9ffe-d31e2583b82b"))
        (pad "" np_thru_hole circle (at 1.5 0.33 ${p.rot}) (size 0.8 0.8) (drill 0.8) (layers "F&B.Cu" "*.Mask") (uuid "39790131-3dd4-4c58-bf54-7579049c1e2f"))
        (pad "" smd rect (at 3.65 -0.78 ${p.rot}) (size 1.4 0.8) (layers "B.Cu" "B.Paste" "B.Mask") (uuid "9822ba63-b150-47ff-a366-675eb1180c77"))
        (pad "" smd rect (at 3.65 1.43 ${p.rot}) (size 1.4 0.8) (layers "B.Cu" "B.Paste" "B.Mask") (uuid "da8bd762-1bfb-4a23-b38b-11fa8d379b47"))
        (pad "1" smd rect (at 2.25 -1.43 ${p.rot}) (size 0.8 2) (layers "B.Cu" "B.Paste" "B.Mask") (uuid "352ce223-0237-4119-9215-9aa2319cd3ee") ${p.P1})
        (pad "2" smd rect (at -0.75 -1.43 ${p.rot}) (size 0.8 2) (layers "B.Cu" "B.Paste" "B.Mask") (uuid "b19a8fe6-d4c9-4a5b-b981-0795e091a0ef") ${p.P2})
        (pad "2" smd roundrect (at -0.25 -1.43 ${p.rot}) (size 0.5 0.25) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "91c54b20-7fd0-4a2a-8f12-937bed5c661e") ${p.P2})
        (pad "3" smd rect (at -2.25 -1.43 ${p.rot}) (size 0.8 2) (layers "B.Cu" "B.Paste" "B.Mask") (uuid "b8ba774a-9f08-4c4a-9b6b-e98615c19547") ${p.P3})
    `
    const back_fabrication = `
        (fp_line (start -3.35 -1) (end 3.35 -1) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "9028c5f2-ec78-4259-b5b3-f5c16c2c079e"))
        (fp_line (start -3.35 1.6) (end -3.35 -1) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "515d501d-dbb6-4ce7-8d18-c0c5103abefe"))
        (fp_line (start 0.1 2.9) (end 0.1 1.6) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "642fee33-3e9a-470e-917d-6bb580f9e83f"))
        (fp_line (start 0.15 2.95) (end 0.1 2.9) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "f2fef0dd-0bb7-4815-8296-f41f01356737"))
        (fp_line (start 0.35 3.15) (end 0.15 2.95) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "939207a9-9d7f-479c-b94b-9e3c9adafe64"))
        (fp_line (start 1.2 3.15) (end 0.35 3.15) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "f9477aed-e046-45c2-a284-80d8472b7e17"))
        (fp_line (start 1.4 1.65) (end 1.4 2.95) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "6900111d-4566-4b54-a4db-3f5462d49399"))
        (fp_line (start 1.4 2.95) (end 1.2 3.15) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "f4c0bbc6-9065-49c0-b1da-75f924dac4f0"))
        (fp_line (start 3.35 -1) (end 3.35 1.6) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "cac1c303-2555-4d5a-bc88-a2386786b8e1"))
        (fp_line (start 3.35 1.6) (end -3.35 1.6) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "792320c2-c77d-4b57-bcdc-ec77d4342db9"))
        (fp_text user "${p.ref}" (at 0 -3.2 ${180 + p.rot}) (layer "B.Fab") (hide yes) (uuid "78497502-3ead-4574-8e28-1dc72e219299") (effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
    `
    const back_mask = `
    `
    const back_courtyard = `
        (fp_line (start -4.4 -2.45) (end -4.4 2.1) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "d9b0bb72-0c01-4be9-afa6-1f41d70fb079"))
        (fp_line (start -4.4 2.1) (end -1.65 2.1) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "c0fd5a53-2e48-482b-b940-621fdcafec30"))
        (fp_line (start -1.65 2.1) (end -1.65 3.4) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "45876ffc-60bd-43f8-a079-82033fdb6821"))
        (fp_line (start -1.65 3.4) (end 1.65 3.4) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "48cde1c0-6190-4144-8079-88383ab63d18"))
        (fp_line (start 1.65 2.1) (end 4.4 2.1) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "d7eac1b7-118d-45f7-97e6-78934ce93f36"))
        (fp_line (start 1.65 3.4) (end 1.65 2.1) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "20b610db-adaa-40b0-93b9-c7eba76151cd"))
        (fp_line (start 4.4 -2.45) (end -4.4 -2.45) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "74a339e6-c1d3-4975-8064-4c2c0abb018c"))
        (fp_line (start 4.4 2.1) (end 4.4 -2.45) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "11a26d31-8566-4f22-81db-c9d25b9f7a62"))
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
