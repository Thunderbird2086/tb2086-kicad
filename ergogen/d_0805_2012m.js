module.exports = {
  params: {
    designator: 'D',
    side: 'F',
    reversible: false,
    show_3d: false,
    to: {type: 'net', value: undefined},
    from: {type: 'net', value: undefined},
  },
  body: p => {
    let fp_name="D_0805_2012Metric_Pad1.15x1.40mm_HandSolder";
    if (p.reversible) {
        fp_name = "TB2086_SMD:" + ${fp_name} + "_rev";
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (descr "Diode SMD 0805 (2012 Metric), square (rectangular) end terminal, IPC_7351 nominal, (Body size source: https://docs.google.com/spreadsheets/d/1BsfQQcO9C6DZCsRaXUlFlo91Tg2WpOkGARC1WS5S8t0/edit?usp=sharing), generated with kicad-footprint-generator")
        (tags "diode handsolder")
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (property "Reference" "${p.ref}" (at 0 -1.65 ${0 + p.rot}) (layer "F.SilkS") (uuid "d0e1b55c-bac1-45ec-b330-60ecf13e76ef") (effects (font (size 1 1) (thickness 0.15))))
        (fp_line (start -1.86 -0.96) (end -1.86 0.96) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "07eff528-542c-4005-bc1c-c04cec65236a"))
        (fp_line (start -1.86 0.96) (end 1 0.96) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "e66a4d09-2fb8-4ba7-8f8a-3214d9f9c76a"))
        (fp_line (start 1 -0.96) (end -1.86 -0.96) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "646a7e8f-4c50-4c51-93e0-5ae6ddb0b33a"))
    `
    const front_pads = `
        (pad "1" smd roundrect (at -1.025 0 ${p.rot}) (size 1.15 1.4) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.217391) (uuid "27a15c2e-449c-4203-a420-e5bc4973c947") ${p.to})
        (pad "2" smd roundrect (at 1.025 0 ${p.rot}) (size 1.15 1.4) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.217391) (uuid "bb2e3ae6-eea5-4641-91c8-df5447618d2b") ${p.from})
    `
    const front_fabrication = `
        (property "Value" "${fp_name}" (at 0 1.65 ${0 + p.rot}) (layer "F.Fab") (uuid "823104e9-5f72-431e-87e6-754f557995bd") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "d7613e02-4054-4aef-bfe7-20165e7dbb5c") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "0dcdd6b1-2580-463e-bbd1-fa27f0716f95") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "6754b65d-a8ba-4db5-bb9d-7c3a93d6e023") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_line (start -1 -0.3) (end -1 0.6) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "e406f724-e6d5-443d-819e-513bfb8fdfcd"))
        (fp_line (start -1 0.6) (end 1 0.6) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "35f7feef-6ada-43a3-831e-721ece1669f8"))
        (fp_line (start -0.7 -0.6) (end -1 -0.3) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "5b06de24-0b36-4024-8c2b-a0f5554b8cfa"))
        (fp_line (start 1 -0.6) (end -0.7 -0.6) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "92a72c4b-0df2-4358-a76c-bfb7e05a6ddf"))
        (fp_line (start 1 0.6) (end 1 -0.6) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "b5a09e9d-0e18-4265-9c3b-04558c47fcb1"))
        (fp_text user "${p.ref}" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (uuid "bfa3eb26-0b70-4316-b71e-ad210c6584e3") (effects (font (size 0.5 0.5) (thickness 0.08))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -1.85 -0.95) (end 1.85 -0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "6580db7d-13d0-4bf7-a059-3329c29def48"))
        (fp_line (start -1.85 0.95) (end -1.85 -0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "6d3f3a89-5c0a-43b4-a3cf-b866d097e97d"))
        (fp_line (start 1.85 -0.95) (end 1.85 0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "7c406879-d86d-4aae-a73a-1a6d7c7d5ef0"))
        (fp_line (start 1.85 0.95) (end -1.85 0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "4ce0a672-520e-40a5-a537-f58832814895"))
    `
    const front_paste = `
    `
    const pads = `
    `
    const back_silkscreen = `
        (fp_line (start -1.86 -0.96) (end 1 -0.96) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "2ba0407f-7d15-4645-afd6-23d9008dbfe6"))
        (fp_line (start -1.86 0.96) (end -1.86 -0.96) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "830d6515-0e13-4567-9ff5-c79983bfc71e"))
        (fp_line (start 1 0.96) (end -1.86 0.96) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "ef6c6f23-6f5a-4330-a5e9-9716b9b808d6"))
    `
    const back_pads = `
        (pad "1" smd roundrect (at -1.025 0 ${p.rot}) (size 1.15 1.4) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.217391) (uuid "6182c654-54de-4a0c-8e7e-31df1329156e") ${p.to})
        (pad "2" smd roundrect (at 1.025 0 ${p.rot}) (size 1.15 1.4) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.217391) (uuid "1334fcd5-98d4-4cc7-a4b4-e1d6abd30276") ${p.from})
    `
    const back_fabrication = `
    `
    const back_mask = `
    `
    const back_courtyard = `
        (fp_line (start -1.85 -0.95) (end -1.85 0.95) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "49b1c65f-c19a-4e7e-8d72-a39c0eb6bb67"))
        (fp_line (start -1.85 0.95) (end 1.85 0.95) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "7cddc553-acf4-4ec7-85ae-df9b910d5f98"))
        (fp_line (start 1.85 -0.95) (end -1.85 -0.95) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "4c8d67ef-2da8-4d43-9f62-d1ac69f7eabd"))
        (fp_line (start 1.85 0.95) (end 1.85 -0.95) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "8f34589f-650a-4438-b0db-86ff468736a2"))
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
        rotate = "(xyz 180 0 0)"
    }

    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/D_0805_2012Metric.step" (offset ${offset}) (scale (xyz 1 1 1)) (rotate ${rotate}))
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
