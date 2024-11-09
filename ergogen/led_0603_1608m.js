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
    let fp_name="LED_0603_1608Metric_Pad1.05x0.95mm_HandSolder";
    if (p.reversible) {
        fp_name = "TB2086_SMD:" + fp_name + "_rev";
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (descr "LED SMD 0603 (1608 Metric), square (rectangular) end terminal, IPC_7351 nominal, (Body size source: http://www.tortai-tech.com/upload/download/2011102023233369053.pdf), generated with kicad-footprint-generator")
        (tags "LED handsolder")
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (property "Reference" "${p.ref}" (at 0 -1.43 ${0 + p.rot}) (layer "F.SilkS") (hide yes) (uuid "52eb8879-7ec0-4312-b020-7c2c1fe8870d") (effects (font (size 1 1) (thickness 0.15))))
        (fp_line (start -1.66 -0.735) (end -1.66 0.735) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "6f648116-12cd-4451-9a05-2add4282059a"))
        (fp_line (start -1.66 0.735) (end 0.8 0.735) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "5a3ecf82-3576-4d1a-b86a-2e9e677d1070"))
        (fp_line (start 0.8 -0.735) (end -1.66 -0.735) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "155b9717-9c78-47d2-b944-45fea8f39df2"))
    `
    const front_pads = `
        (pad "1" smd roundrect (at -0.875 0 ${p.rot}) (size 1.05 0.95) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (uuid "99a56463-dfb1-465b-a799-c800a6553842") ${p.to})
        (pad "2" smd roundrect (at 0.875 0 ${p.rot}) (size 1.05 0.95) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (uuid "690100f4-a25e-41af-b303-e1cc8463bd48") ${p.from})
    `
    const front_fabrication = `
        (property "Value" "${fp_name}" (at 0 1.43 ${0 + p.rot}) (layer "F.Fab") (uuid "9e7adbb5-13d4-4208-9aaa-340a7a487639") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "2b4ce5c1-b8f4-49bc-9550-a306d371cba7") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "6599b8fe-ad41-4e55-ab8d-b50e7cec28d5") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "7bab6b74-6050-476d-9b91-f9867a17b226") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_line (start -0.8 -0.1) (end -0.8 0.4) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "3d0ed6a3-2e33-40ff-a6ca-6cc041fe8aef"))
        (fp_line (start -0.8 0.4) (end 0.8 0.4) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "838b267e-fd23-440f-8b7a-f8e5bf26fe6e"))
        (fp_line (start -0.5 -0.4) (end -0.8 -0.1) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "a9406fe0-b021-4a38-b6df-750dd8aca575"))
        (fp_line (start 0.8 -0.4) (end -0.5 -0.4) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "a026579f-341d-478f-8c20-8bc03092066f"))
        (fp_line (start 0.8 0.4) (end 0.8 -0.4) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "3ba3f21a-8c74-4562-a6f9-75b1091df5f1"))
        (fp_text user "${p.ref}" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (uuid "ad877eb7-e3a0-499f-9696-0931d55689da") (effects (font (size 0.4 0.4) (thickness 0.06))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -1.65 -0.73) (end 1.65 -0.73) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "aa70e4da-39c1-41b9-b6af-2b3464673a0d"))
        (fp_line (start -1.65 0.73) (end -1.65 -0.73) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "3a24500f-ca73-4e07-8461-e8bc51faeb48"))
        (fp_line (start 1.65 -0.73) (end 1.65 0.73) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "d16b4135-2215-470c-a786-5b4839a472e3"))
        (fp_line (start 1.65 0.73) (end -1.65 0.73) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "55985617-1f03-4dc3-89f9-cd379eba2d39"))
    `
    const front_paste = `
    `
    const pads = `
    `
    const back_silkscreen = `
        (fp_line (start -0.8 -0.735) (end 1.66 -0.735) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "4727627f-0f75-4b4d-a044-0525d6e8d1c9"))
        (fp_line (start 1.66 -0.735) (end 1.66 0.735) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "cf9a406d-71a8-44d3-a995-0b838ea7fd5a"))
        (fp_line (start 1.66 0.735) (end -0.8 0.735) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "d57a3ccc-b6ea-41ec-be3c-d0c6a645bb0a"))
    `
    const back_pads = `
        (pad "1" smd roundrect (at 0.875 0 ${p.rot}) (size 1.05 0.95) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (uuid "511e27e8-7ebf-49ec-a39c-09e2b0f50f60") ${p.to})
        (pad "2" smd roundrect (at -0.875 0 ${p.rot}) (size 1.05 0.95) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (uuid "4f56421d-3d00-4b9e-b60f-988e9ff9a773") ${p.from})
    `
    const back_fabrication = `
        (fp_line (start -0.8 -0.4) (end 0.5 -0.4) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "42df25be-ed9b-49b5-8242-0aa865057c63"))
        (fp_line (start -0.8 0.4) (end -0.8 -0.4) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "23d163b2-5fa1-4018-a953-2521b851bb87"))
        (fp_line (start 0.5 -0.4) (end 0.8 -0.1) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "ebe97640-a1d7-44e9-a8fb-ac2cddbb9791"))
        (fp_line (start 0.8 -0.1) (end 0.8 0.4) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "2b7c5d62-624f-4286-92a0-a45e2ce73bec"))
        (fp_line (start 0.8 0.4) (end -0.8 0.4) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "cf25f341-6390-4400-adad-73836cf738ce"))
    `
    const back_mask = `
    `
    const back_courtyard = `
        (fp_line (start -1.65 -0.73) (end -1.65 0.73) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "6b7073ed-846e-4652-acf1-804f1eccb6b8"))
        (fp_line (start -1.65 0.73) (end 1.65 0.73) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "641c0ab3-fa43-4f24-8858-e557c77f32e1"))
        (fp_line (start 1.65 -0.73) (end -1.65 -0.73) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "995d40a3-7743-489a-9bf7-ed21fc47f638"))
        (fp_line (start 1.65 0.73) (end 1.65 -0.73) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "6439e457-72e1-4ca6-85ed-50c7e286fc68"))
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
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/LED_0603_1608Metric.step" (offset ${offset}) (scale (xyz 1 1 1)) (rotate ${rotate}))
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
