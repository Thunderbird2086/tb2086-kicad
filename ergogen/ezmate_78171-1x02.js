module.exports = {
  params: {
    designator: 'J',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,     // delete if not needed
    P2: {type: 'net', value: undefined}, // change to undefined as needed
    MP: {type: 'net', value: 'MP'}, // undefined, // change to undefined as needed
    P1: {type: 'net', value: undefined}, // change to undefined as needed
  },
  body: p => {
    let fp_name="Molex_Pico-EZmate_78171-0002_1x02-1MP_P1.20mm_Vertical"
    if (p.reversible) {
        fp_name = "TB2086_MISC:" + fp_name + "_rev";
    }

    const standard_opening = `(
         footprint "${fp_name}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (descr "Molex Pico-EZmate series connector, 78171-0002 (http://www.molex.com/pdm_docs/sd/781710002_sd.pdf), generated with kicad-footprint-generator")
        (tags "connector Molex Pico-EZmate side entry")
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (property "Reference" "${p.ref}" (at 0 -3.5 ${0 + p.rot}) (layer "F.SilkS") (hide yes) (uuid "10879a36-645c-4a29-bc20-ebd8171b36db") (effects (font (size 1 1) (thickness 0.15))))
        (fp_line (start -2.21 -2.09) (end -1.16 -2.09) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "0435dc30-148e-48fc-87e2-7b216d44fb4c"))
        (fp_line (start -2.21 1.24) (end -2.21 -2.09) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "2b78662d-27c5-4ff0-8681-6a37f96400b8"))
        (fp_line (start -1.16 -2.09) (end -1.16 -2.3) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "18206630-6d7a-40f4-8595-b2b221ea4c47"))
        (fp_line (start -1.14 2.63) (end -0.64 2.63) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "912c84e8-a477-474a-b50c-fb6cd8bf0fd2"))
        (fp_line (start -0.85 -3.153553) (end -0.6 -2.8) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "717b4efc-674e-4faf-9cbe-e8d97ddeb008"))
        (fp_line (start -0.64 2.63) (end -0.34 2.13) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "3c3160d5-499a-4c6f-b623-b2ff7be2886f"))
        (fp_line (start -0.6 -2.8) (end -0.35 -3.153553) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "7fcef2b5-0636-4a46-a0f9-1deba812471f"))
        (fp_line (start -0.35 -3.153553) (end -0.85 -3.153553) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "a3f10e84-159d-442b-8731-ea162e109845"))
        (fp_line (start -0.34 2.13) (end 0.34 2.13) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "094dcf1b-d5cb-470a-a9dc-8d5d1fc5ab88"))
        (fp_line (start 0.34 2.13) (end 0.64 2.63) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "2a239a43-2029-4488-8c91-1c69a54a2fc8"))
        (fp_line (start 0.64 2.63) (end 1.14 2.63) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "ebbe82ae-a89e-4824-a439-03ed0a36097b"))
        (fp_line (start 2.21 -2.09) (end 1.16 -2.09) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "c1f0d5c6-4723-4fe0-a1a6-b793fdef116a"))
        (fp_line (start 2.21 1.24) (end 2.21 -2.09) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (uuid "1b08912d-9ebc-4044-ad3f-acb949f28879"))
    `
    const front_pads = `
        (pad "1" smd roundrect (at -0.6 -1.875 ${p.rot}) (size 0.6 0.85) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (uuid "ba04ed4c-ffd2-4ede-9a8a-ec118e312f5a") ${p.P1})
        (pad "1" smd roundrect (at -0.28 -2.2 ${p.rot}) (size 0.3 0.2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "7144e224-10e2-43c1-8cc6-a91ed60e5201") ${p.P1})
        (pad "2" smd roundrect (at 0.28 -1.56 ${p.rot}) (size 0.3 0.2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "dbc9c61b-d745-425e-8ede-d505b7742a03") ${p.P2})
        (pad "2" smd roundrect (at 0.6 -1.875 ${p.rot}) (size 0.6 0.85) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (uuid "67e529fe-f5ea-4ebb-9e03-59063133322b") ${p.P2})
        (pad "MP" smd roundrect (at -1.75 1.9 ${p.rot}) (size 0.7 0.8) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (uuid "e82bc6ca-064f-4398-80c2-dea896a29e34") ${p.MP})
        (pad "MP" smd roundrect (at 1.75 1.9 ${p.rot}) (size 0.7 0.8) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (uuid "e342a947-8208-4d6d-92fb-ef4f712280fe") ${p.MP})
    `
    const front_fabrication = `
        (property "Value" "${fp_name}" (at 0 3.72 ${0 + p.rot}) (layer "F.Fab") (uuid "6d62f44a-0582-4f43-9c00-53fc4f88ebae") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "607801c9-65f7-4d66-878d-e64f85043aa4") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "18efc393-4b21-4549-b3ea-5a91d09516f4") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "dc70a801-77a6-4de3-b4f2-e16b36a94f4e") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_line (start -2.1 -1.98) (end -2.1 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "0809e06a-f73a-4682-b250-b3686e7e4da7"))
        (fp_line (start -2.1 -1.98) (end 2.1 -1.98) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "7e0e7769-0706-497b-a311-931a342a2157"))
        (fp_line (start -2.1 2.52) (end -0.75 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "1b190cbc-122f-4850-aac0-b8169432e394"))
        (fp_line (start -1.1 -1.98) (end -0.6 -1.272893) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "6d1b6b32-9e92-4765-83c4-079979955b67"))
        (fp_line (start -0.75 2.52) (end -0.45 2.02) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "b68aea14-1421-4639-a985-f1f0a2f6ae48"))
        (fp_line (start -0.6 -1.272893) (end -0.1 -1.98) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "4d8adf4f-c29a-4342-92ca-70eeea9f5604"))
        (fp_line (start -0.45 2.02) (end 0.45 2.02) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "911b4a76-7b9f-481b-912b-bbcf558bb43c"))
        (fp_line (start 0.45 2.02) (end 0.75 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "06ab9b31-b7ab-4070-af6d-8ef7f964a92a"))
        (fp_line (start 0.75 2.52) (end 2.1 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "7147aa95-02b4-471c-8269-a63b8fd0b254"))
        (fp_line (start 2.1 -1.98) (end 2.1 2.52) (stroke (width 0.1) (type solid)) (layer "F.Fab") (uuid "73458432-ced2-4f51-8caa-00486065e0f6"))
        (fp_text user "${p.ref}" (at 0 0.27 ${0 + p.rot}) (layer "F.Fab") (uuid "c4a7460e-c105-4c6b-8438-19173dd519bb") (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -2.6 -2.8) (end -2.6 3.02) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "12e76316-e9b7-4431-baf9-59c601029f2e"))
        (fp_line (start -2.6 3.02) (end 2.6 3.02) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "9468f587-97f6-4fea-bbcb-5766309c5b93"))
        (fp_line (start 2.6 -2.8) (end -2.6 -2.8) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "0e61684d-a9a7-407a-a9bd-b75b8e3d93f4"))
        (fp_line (start 2.6 3.02) (end 2.6 -2.8) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "9934b60a-892a-4157-b63f-708c819da4f1"))
    `
    const front_paste = `
    `
    const pads = `
        (pad "1" thru_hole circle (at 0 -2.2 ${p.rot}) (size 0.4 0.4) (drill 0.3) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "2033e7b0-8ef6-4c70-b06e-87b48ebddd44") ${p.P1})
        (pad "2" thru_hole circle (at 0 -1.56 ${p.rot}) (size 0.4 0.4) (drill 0.3) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "f30f2fa7-df9f-4679-b27f-64c182cdf093") ${p.P2})
    `
    const back_silkscreen = `
        (fp_line (start -2.21 -2.09) (end -1.16 -2.09) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "2e14f94f-564c-4d62-a09f-82742afb60d4"))
        (fp_line (start -2.21 1.24) (end -2.21 -2.09) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "b67f15de-0031-4aab-a137-fb5b4ff1eec7"))
        (fp_line (start -0.64 2.63) (end -1.14 2.63) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "f70d686e-2d99-46cb-ba0a-0ee5f2177078"))
        (fp_line (start -0.34 2.13) (end -0.64 2.63) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "c6c19983-080b-4102-bba9-53421e19d55b"))
        (fp_line (start 0.34 2.13) (end -0.34 2.13) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "5d264513-268f-4941-bf57-412406b98f6a"))
        (fp_line (start 0.35 -3.153553) (end 0.85 -3.153553) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "0b6f8c4d-57ff-4cca-b211-22be8d7b7020"))
        (fp_line (start 0.6 -2.8) (end 0.35 -3.153553) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "782b0966-ba11-4e7c-9493-9952625e710d"))
        (fp_line (start 0.64 2.63) (end 0.34 2.13) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "3f7f974a-92b9-4d22-b216-e1c54590f50c"))
        (fp_line (start 0.85 -3.153553) (end 0.6 -2.8) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "5302180e-51a9-492e-a01c-c3e177d34e32"))
        (fp_line (start 1.14 2.63) (end 0.64 2.63) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "8966c81c-5123-406f-956b-fc99d3806c27"))
        (fp_line (start 1.16 -2.09) (end 1.16 -2.3) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "60a2ac6e-7c05-4e21-ac21-564f105ab1cb"))
        (fp_line (start 2.21 -2.09) (end 1.16 -2.09) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "32691efa-72e2-4931-8912-ab5f5bafd5f8"))
        (fp_line (start 2.21 1.24) (end 2.21 -2.09) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "297aac00-9f4f-4d26-979e-2b01d6b5bf59"))
    `
    const back_pads = `
        (pad "1" smd roundrect (at 0.28 -2.2 ${p.rot}) (size 0.3 0.2) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "2c32b7e8-c42b-4484-b5c0-2708902edaf1") ${p.P1})
        (pad "1" smd roundrect (at 0.6 -1.875 ${p.rot}) (size 0.6 0.85) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (uuid "9c32cd2d-0b9d-480b-838d-508a8850b66d") ${p.P1})
        (pad "2" smd roundrect (at -0.6 -1.875 ${p.rot}) (size 0.6 0.85) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (uuid "76f744eb-fa27-4f39-8640-04918763efd8") ${p.P2})
        (pad "2" smd roundrect (at -0.28 -1.56 ${p.rot}) (size 0.3 0.2) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "51540ae3-36e9-4343-9cef-272438a67fc6") ${p.P2})
        (pad "MP" smd roundrect (at -1.75 1.9 ${p.rot}) (size 0.7 0.8) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (uuid "572d96d9-1811-471d-908e-b7f0103e43b5") ${p.MP})
        (pad "MP" smd roundrect (at 1.75 1.9 ${p.rot}) (size 0.7 0.8) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (uuid "4b8648d5-3889-4513-8e0d-b25de29397e0") ${p.MP})
    `
    const back_fabrication = `
        (fp_text user "${p.ref}" (at 0 0.27 ${0 + p.rot}) (layer "B.Fab") (uuid "c4a7460e-c105-4c6b-8438-19173dd519bb") (effects (font (size 1 1) (thickness 0.15)) (justify left bottom)))
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
    let offset = "(xyz 0 0 1.6)"
    let rotate = "(xyz -90 0 0)"
    if (p.side == "B") {
        offset = "(xyz 0 0 -3.1)"
        rotate = "(xyz 90 0 180)"
    }
    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/Molex_Ezmate_Pico_Socket_2pin.step" (offset ${offset}) (scale (xyz 1 1 1)) (rotate ${rotate}))
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