module.exports = {
  params: {
    designator: 'L',
    side: 'B',
    reversible: false,
    show_3d: false,
    from: {type: 'net', value: undefined},
    to: {type: 'net', value: undefined},
    VCC: {type: 'net', value: 'VCC'},
    GND: {type: 'net', value: 'GND'},
  },
  body: p => {
    let fp_name="LED_SK6812MINI-E";
    if (p.reversible) {
        fp_name = "TB2086_LED:" + fp_name + "_rev";
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20221018)
        (generator pcbnew)
        (layer "F.Cu")
        (attr through_hole)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_text value "${fp_name}" (at 0 -0.5 ${p.rot}) (layer "F.SilkS") hide (effects (font (size 1 1) (thickness 0.15))) (tstamp ee132152-743b-421a-941a-dcd0b807fc0f))
        (fp_line (start 3.9 -1.325) (end 3.9 -0.425) (stroke (width 0.12) (type default)) (layer "F.SilkS") (tstamp e585007d-752b-4572-8fe9-7f401f11cfbe))
    `
    const front_pads = `
        (pad "1" smd rect (at -2.75 0.85 ${p.rot}) (size 1.9 0.82) (layers "F.Cu" "F.Paste" "F.Mask") (tstamp e31a44b2-39a6-4ac2-baf2-da01b817abc9) ${p.VCC})
        (pad "2" smd rect (at -2.75 -0.85 ${p.rot}) (size 1.9 0.82) (layers "F.Cu" "F.Paste" "F.Mask") (tstamp 7b48d7e3-3642-43f3-89f9-d2d88fa3e060) ${p.to})
        (pad "3" smd roundrect (at 2.75 -0.85 ${p.rot}) (size 1.9 0.82) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0) (chamfer_ratio 0.5) (chamfer top_right) (tstamp b9668442-e4ed-41ed-b5a1-5d2a382d7975) ${p.GND})
        (pad "4" smd rect (at 2.75 0.85 ${p.rot}) (size 1.9 0.82) (layers "F.Cu" "F.Paste" "F.Mask") (tstamp d64de512-1986-41bd-bac0-8d559f3e2450) ${p.from})
    `
    const front_fabrication = `
    `
    const front_mask = `
    `
    const front_courtyard = `
    `
    const front_paste = `
    `
    const pads = `
        (pad "1" smd rect (at -2.2 0.4 ${p.rot}) (size 0.5 0.82) (layers "F.Cu" "F.Paste" "F.Mask") (tstamp 19a59590-f961-4709-b4b7-1b3c4cd1d6b1) ${p.VCC})
        (pad "2" smd rect (at -3.075 -0.4 ${p.rot}) (size 0.25 0.82) (layers "F.Cu" "F.Paste" "F.Mask") (tstamp 1eae5d52-99c8-4e84-8049-690c20df374b) ${p.to})
        (pad "3" smd rect (at 2.2 -0.4 ${p.rot}) (size 0.5 0.82) (layers "F.Cu" "F.Paste" "F.Mask") (tstamp 182a5b3a-4ebf-4fe9-89a0-4f9cff593ab0) ${p.GND})
        (pad "4" smd rect (at 3.075 0.4 ${p.rot}) (size 0.25 0.82) (layers "F.Cu" "F.Paste" "F.Mask") (tstamp b93fc79e-5ba9-48e3-a7ea-34665f54185c) ${p.from})
        (pad "1" thru_hole circle (at -2.2 0 ${p.rot}) (size 0.4 0.4) (drill 0.3) (layers "*.Cu" "*.Mask") (tstamp 589101e5-c970-499f-8b18-be85c1f78cd4) ${p.VCC})
        (pad "2" thru_hole circle (at -3.075 0 ${p.rot}) (size 0.4 0.4) (drill 0.3) (layers "*.Cu" "*.Mask") (tstamp 6b3c14f2-bb56-4c3f-ac4d-c47bb9f68a4a) ${p.to})
        (pad "3" thru_hole circle (at 2.2 0 ${p.rot}) (size 0.4 0.4) (drill 0.3) (layers "*.Cu" "*.Mask") (tstamp 8383a41c-e4ec-4f87-8b71-52a60867bd6c) ${p.GND})
        (pad "4" thru_hole circle (at 3.075 0 ${p.rot}) (size 0.4 0.4) (drill 0.3) (layers "*.Cu" "*.Mask") (tstamp 3e6232b3-c61d-4c50-84b6-0a6509920b58) ${p.from})
        (pad "1" smd rect (at -2.2 -0.4 ${p.rot}) (size 0.5 0.82) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp dcd85d80-189b-49f2-a9f1-cd67046a4900) ${p.VCC})
        (pad "2" smd rect (at -3.075 0.4 ${p.rot}) (size 0.25 0.82) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp c5a37173-e1a5-4f5a-b866-01e3d1783d49) ${p.to})
        (pad "3" smd rect (at 2.2 0.4 ${p.rot}) (size 0.5 0.82) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp b68e72b0-77ab-413f-a52c-c5a0566e586f) ${p.GND})
        (pad "4" smd rect (at 3.075 -0.4 ${p.rot}) (size 0.25 0.82) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp 22fd7df0-215f-43aa-99e1-365f69b00094) ${p.from})
    `
    const back_silkscreen = `
        (fp_line (start 3.9 0.4) (end 3.9 1.3) (stroke (width 0.12) (type default)) (layer "B.SilkS") (tstamp a2fd7e33-91b2-493d-9358-f3c06d6e1808))
    `
    const back_pads = `
        (pad "1" smd rect (at -2.75 -0.85 ${p.rot}) (size 1.9 0.82) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp 2ebcdb15-df02-4672-921e-495aeacfc774) ${p.VCC})
        (pad "2" smd rect (at -2.75 0.85 ${p.rot}) (size 1.9 0.82) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp d1b1904e-cf8b-48e2-8111-aa4915f15642) ${p.to})
        (pad "3" smd roundrect (at 2.75 0.85 ${p.rot}) (size 1.9 0.82) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0) (chamfer_ratio 0.5) (chamfer bottom_right) (tstamp f8883d7b-fd68-4e05-aabc-aaf1b413462c) ${p.GND})
        (pad "4" smd rect (at 2.75 -0.85 ${p.rot}) (size 1.9 0.82) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp 794a0d54-5423-4149-81c5-5ac72cba9282) ${p.from})
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
        (fp_line (start -1.7 -1.5) (end 1.7 -1.5) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") (tstamp 13f284aa-33d8-4dbb-82e8-d7c1122f9248))
        (fp_line (start -1.7 1.5) (end -1.7 -1.5) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") (tstamp 3b4803bd-cb7a-4f7d-bd0a-8fae95e67ead))
        (fp_line (start 1.7 -1.5) (end 1.7 1.5) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") (tstamp 13bf9441-f86e-492d-b16f-dce97d7b7280))
        (fp_line (start 1.7 1.5) (end -1.7 1.5) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") (tstamp 0e3e120d-c565-4d00-a418-9a125e60bb9b))
    `
    const user_drawing = `
    `
    const user_comments = `
        (fp_line (start -1.6 -1.4) (end 1.6 -1.4) (stroke (width 0.12) (type solid)) (layer "Cmts.User") (tstamp 5b6ec099-d04c-418c-974c-d68e72cc0aff))
        (fp_line (start -1.6 1.4) (end -1.6 -1.4) (stroke (width 0.12) (type solid)) (layer "Cmts.User") (tstamp 9e3bb0f1-fc00-4a68-a83d-92c0d8eccb92))
        (fp_line (start 1.6 -1.4) (end 1.6 1.4) (stroke (width 0.12) (type solid)) (layer "Cmts.User") (tstamp b41c7251-8fe1-4530-8af2-9e9606dc2a65))
        (fp_line (start 1.6 1.4) (end -1.6 1.4) (stroke (width 0.12) (type solid)) (layer "Cmts.User") (tstamp 4dd7c934-8aa1-4c36-81d9-8b35ff422b9f))
    `
    const user_eco1 = `
        (fp_text reference "${p.ref}" (at 0 2.1 ${p.rot}) (layer "Eco1.User") (effects (font (size 0.7 0.7) (thickness 0.15))) (tstamp 040791c8-ce5a-456d-9400-790cded8eb9e))
    `
    const user_eco2 = `
    `

    let offset = "(xyz 0 0 -1.8)"
    let rotate = "(xyz 0 0 0)"
    if (p.side == "F") {
        offset = "(xyz 0 0 0.2)"
        rotate = "(xyz 0 180 0)"
    }

    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/SK6812MINI-E.wrl" (offset ${offset}) (scale (xyz 1 1 1)) (rotate ${rotate}))
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

    if (p.reversible) {
        final += pads;
    }

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
