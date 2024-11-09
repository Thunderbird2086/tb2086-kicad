module.exports = {
  params: {
    designator: 'LED',
    side: 'F',
    reversible: false,
    show_3d: false,
    from: {type: 'net', value: undefined},
    to: {type: 'net', value: undefined},
  },
  body: p => {
    let fp_name="TB2086_SMD:LED_0805_2012Metric_Pad1.15x1.40mm_HandSolder";
    if (p.reversible) {
        fp_name = fp_name + "_rev";
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (descr "LED SMD 0805 (2012 Metric), square (rectangular) end terminal, IPC_7351 nominal, (Body size source: https://docs.google.com/spreadsheets/d/1BsfQQcO9C6DZCsRaXUlFlo91Tg2WpOkGARC1WS5S8t0/edit?usp=sharing), generated with kicad-footprint-generator")
        (tags "LED handsolder")
        (attr smd)
        ${p.at /* parametric position */}
    `
    const reference = `
        (property "Reference" "${p.ref}" (at 0 -1.65 ${0 + p.rot}) (layer "${p.side}.SilkS") (hide yes) (uuid "adeadb62-c044-48e0-ac19-1f0e030ad34d") (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_silkscreen = `
        (fp_line (start -1.86 -0.96) (end -1.86 0.96) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "b7185355-54f6-4d50-9e34-bcf67599e43d"))
        (fp_line (start -1.86 0.96) (end 1 0.96) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "3164853b-4968-4482-b929-b2f8d547c21c"))
        (fp_line (start 1 -0.96) (end -1.86 -0.96) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "5b530a33-9634-4ec2-b089-ebf9ef324dba"))
    `
    const front_pads = `
        (pad "1" smd roundrect (at -1.025 0 ${p.rot}) (size 1.15 1.4) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.217391) (uuid "8a9a1d94-6834-4a6a-a6c2-697a4f9bf907") ${p.to})
        (pad "2" smd roundrect (at 1.025 0 ${p.rot}) (size 1.15 1.4) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.217391) (uuid "47fc1f0a-91d0-454b-97a3-2f6673f7bd08") ${p.from})
    `
    const front_fabrication = `
        (property "Value" "${fp_name}" (at 0 1.65 ${0 + p.rot}) (layer "F.Fab") (uuid "f72ba3d1-160a-4eb3-8a73-ebecbaca6ac6") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "45286779-2601-427e-a6c3-a72b28358dd2") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "eff04925-ddaa-44a3-8d76-28eede66154b") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "21999ced-8219-4305-80bc-6b1cff800cd5") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_line (start -1 -0.3) (end -1 0.6) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "442c19d7-330b-430a-9db4-989c660011cf"))
        (fp_line (start -1 0.6) (end 1 0.6) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "37edfe7b-d45c-4e70-a2bc-723513c40e4b"))
        (fp_line (start -0.7 -0.6) (end -1 -0.3) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "85ce3d18-b3a9-4e65-ac51-35af002ff769"))
        (fp_line (start 1 -0.6) (end -0.7 -0.6) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "3c1f2aff-d96d-455f-b586-6049d42c44af"))
        (fp_line (start 1 0.6) (end 1 -0.6) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "7b1f47fd-c2c5-49ef-95bc-288446613287"))
        (fp_text user "${p.ref}" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (uuid "ffce8aee-2703-47c4-a11e-8c1198fe7b25") (effects (font (size 0.5 0.5) (thickness 0.08))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -1.85 -0.95) (end 1.85 -0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "3e4b2b1a-c72d-452e-aa12-669fa389df57"))
        (fp_line (start -1.85 0.95) (end -1.85 -0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "1efa9d3f-899f-47ba-acb1-f3840bc0c266"))
        (fp_line (start 1.85 -0.95) (end 1.85 0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "9535fc71-84f3-46aa-98de-a6e319a05cce"))
        (fp_line (start 1.85 0.95) (end -1.85 0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "e0786415-e40a-4f75-bad9-689ada1455c6"))
    `
    const front_paste = `
    `
    const pads = `
    `
    const back_silkscreen = `
        (fp_line (start -1 -0.96) (end 1.86 -0.96) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "ed3df01a-58e2-4dbf-9a25-e99196df6482"))
        (fp_line (start 1.86 -0.96) (end 1.86 0.96) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "110d3079-7d73-4e73-b2f9-11bdf0977e43"))
        (fp_line (start 1.86 0.96) (end -1 0.96) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "d7d0cd41-2c64-4900-b4e9-f7337bdae33c"))
    `
    const back_pads = `
        (pad "1" smd roundrect (at 1.025 0 ${p.rot}) (size 1.15 1.4) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.217391) (uuid "f74cf48c-7cdb-49e9-a35b-1a3bdddbb4c5") ${p.to})
        (pad "2" smd roundrect (at -1.025 0 ${p.rot}) (size 1.15 1.4) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.217391) (uuid "faa58b50-c592-493e-ac5c-174bf1b699be") ${p.from})
    `
    const back_fabrication = `
    `
    const back_mask = `
    `
    const back_courtyard = `
        (fp_line (start -1.85 -0.95) (end -1.85 0.95) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "a9a89462-99f3-4143-8d57-fc31d363574a"))
        (fp_line (start -1.85 0.95) (end 1.85 0.95) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "e3935c07-b730-4206-b7b0-59229b188452"))
        (fp_line (start 1.85 -0.95) (end -1.85 -0.95) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "7d287598-cfb2-4873-829e-04dd3e202136"))
        (fp_line (start 1.85 0.95) (end 1.85 -0.95) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "9ed1de6e-5a69-4707-b974-d3f0492bdeb0"))
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
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/LED_0805_2012Metric.step" (offset ${offset}) (scale (xyz 1 1 1)) (rotate ${rotate}))
    `
    const standard_closing = `
            )
    `
    let final = standard_opening;
    final += reference;
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
